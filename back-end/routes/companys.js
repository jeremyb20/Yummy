const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Company = require('../models/company');
const cloudinary = require('cloudinary').v2;
const async = require('async');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const app = express();

var fileupload = require('express-fileupload');

app.use(fileupload({
  useTempFiles:true
}));

cloudinary.config({
  cloud_name:'ensamble',
  api_key: '218419814373569',
  api_secret: 'xBNx-qCyqTrcAahx8ZqGEAnNpwM'
});

// Register aqui hay enviar la foto
router.post('/register', async(req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  
  const result = await cloudinary.uploader.upload(req.file != undefined? req.file.path: obj.image);
  let newCompany = new Company ({
    companyName: obj.companyName,
    phone:obj.phone,
    email: obj.email,
    password: obj.password,
    lat: obj.lat,
    lng: obj.lng,
    userState: obj.userState,
    bussinesSelected:obj.bussinesSelected,
    photo: result.url == undefined? obj.image : result.url
  });

  Company.addCompany(newCompany,async(err, user, done) => {
    try {
    //   var smtpTransport = nodemailer.createTransport({
    //     host: 'mail.ticowebmail.com',
    //     port: 25,
    //     secure: false,
    //     logger: true,
    //     debug: true,
    //     ignoreTLS: true,
    //     auth: {
    //       user: 'marco@ticowebmail.com',
    //       pass: 'NTRNTxplr12'
    //     },
    //     tls: {
    //       // do not fail on invalid certs
    //       rejectUnauthorized: false
    //     }
    //   });
    //   var mailOptions = {
    //     to: newCompany.email,
    //     from: 'marco@ticowebmail.com',
    //     subject: 'Node.js Register User',
    //     text: '¡Bienvenido a Yummy Eats! ' + obj.name + ' para iniciar sesion estos serian sus credenciales: correo: ' + obj.email + ' contraseña temporal:'+obj.password 
    //   };
    //   smtpTransport.sendMail(mailOptions, function (err) {
    //     res.json({ success: true, msg: 'Company registered' });
    //   });
      res.json({ success: true, msg: 'Company registered' });
      } catch (err) {
        res.json({success: false, msg: 'That Email or Username already exisits.!'});
        next(err);
      }
  
  });
});

router.get('/profile/getAllUsers', function(req, res){
    Company.find({}, function(err, users){
    if(err){
      res.send('something went really wrong');
      next();
    }
    res.json(users)
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Company.getUserByUsername(email, (err, company) => {
    if(err) throw err;
    if(!company) {
      return res.json({success: false, msg: 'Email not found'});
    }

    Company.comparePassword(password, company.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: company}, config.secret, {
          expiresIn: 604800   // 1 week: 604800 1 day //60 one minute 
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          company: {
            id: company._id,
            companyName: company.companyName,
            username: company.username,
            email: company.email,
            photo: company.photo,
            userState: company.userState,
            lat: company.lat,
            lng: company.lng
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({company: req.company});
});

router.route('/users/:_id')
  .delete(function(req, res){
    Company.remove(req,res);
});

router.put('/profile/updateCompany', (req, res) => {
    Company.findByIdAndUpdate(req.body._id, { $set: req.body }).then(function (data) {
    res.json({ success: true, msg: 'Update success.' });
  });
});

router.get('/mailbox/getMessages/:id', function(req, res){
  var id = req.params.id;
  Company.findById(id, function(err, results){
    if(err){
      res.send('something went really wrong');
      next();
    }
    res.json(results.message)
  });
});

router.post('/mailbox/sendMessage', (req, res, next) => {
    Company.findOneAndUpdate({ _id: req.body.idUserSent }, { $push: { message: req.body  } }).then(function(data){
    res.json({success:true,msg: 'Message sent'});
  });
});


router.post('/forgot', (req, res, next) => {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
        Company.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
         return res.json({success:false,msg: 'Email not found'});
        }

        if(user != null) {
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
          user.save(function(err) {
            done(err, token, user);
          });
        }
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        host: 'mail.ticowebmail.com',
        port: 25,
        secure: false,
        logger: true,
        debug: true,
        ignoreTLS: true,
        auth: {
          user: 'marco@ticowebmail.com',
          pass: 'NTRNTxplr12'
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });
      smtpTransport.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'marco@ticowebmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          //'http://localhost:4200/reset/' + token + '\n\n' +
          'https://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.json({success: true, msg: 'An e-mail has been sent to ' + user.email + ' with further instructions.'});
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

router.get('/reset/:token', (req, res) => {
    Company.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      return res.json({success:false,msg: err});
    }else{
      res
      .status(200)
      .json({ user: user, token: req.params.token });
    }
  });
});


router.post('/reset/', function(req, res) {
  req.params.token = req.body.token;
  async.waterfall([
    function(done) {
        Company.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return  res.json({success:false,msg: 'Password reset token is invalid or has expired..'});
        }else if(req.body.password === req.body.confirm){
          user.password = req.body.password;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;

            bcrypt.genSalt(10, function(err, salt) {
            if (err) return next(err);

              bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                user.password = hash;
                user.save(function(err) {
                  done(err, user);
                });
              });
            });
        }else{
          return  res.json({success:false,msg: 'Password do not match..'});
        }
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        host: 'mail.ticowebmail.com',
        port: 25,
        secure: false,
        logger: true,
        debug: true,
        ignoreTLS: true,
        auth: {
          user: 'marco@ticowebmail.com',
          pass: 'NTRNTxplr12'
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });
      smtpTransport.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'marco@ticowebmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        res.json({success:true,msg: 'Success! Your password has been changed.'});
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/login');
  });
});



module.exports = router;