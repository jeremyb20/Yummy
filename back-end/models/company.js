const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passportLocalMongoose = require('passport-local-mongoose');

// User Schema
const CompanySchema = mongoose.Schema ({
  companyName: {
    type: String
  },
  phone: {
    type: Number,
    require: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    require: false
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },
  userState: {
    type: Number,
    require: false
  },
  bussinesSelected: {
    type: Number,
    require: true
  },
  message: [{
    idUserSent: {
      type: String,
      require: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    message: {
      type: String,
      require: true
    },
    date: {
      type: String,
      require: true
    },
    imageUrl: {
      type: String,
      require: false
    }
  }]
});

CompanySchema.plugin(passportLocalMongoose);

const Company = module.exports = mongoose.model('Company', CompanySchema);

module.exports.getCompanyById = function(id, callback) {
    Company.findById(id, callback);
}

module.exports.getUserByUsername = function(email, callback) {
  const query = {email: email}
  Company.findOne(query, callback);
}

module.exports.addCompany = function(newCompany, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newCompany.password, salt, (err, hash) => {
      if(err) throw err;
      newCompany.password = hash;
      newCompany.save(callback);
    });
  });
}

module.exports.getUsers = function(users, callback){
  const query = {users: users}
  Company.find();
}

module.exports.deleteOne = function(req,res){
    Company.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });
}

module.exports.update = function(username, callback){
    Company.findByIdAndUpdate(username, callback);
}

module.exports.getUserMessage = function(req, callback){
  console.log(req, 'que sale');
  const query = {id: req.body._id}
  Company.find();
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
