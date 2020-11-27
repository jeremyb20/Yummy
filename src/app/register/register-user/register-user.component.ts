import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/common/services/validate.service';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;
  phone: number;
  file : File;
  photoSelected: String | ArrayBuffer;
  loading: boolean = false;

  user: SocialUser;

  constructor(
    private validateService: ValidateService,
    private authServices: AuthServices,
    private router: Router,
    private authService: SocialAuthService
   // private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.loading = true;
      this.user = user;
      const Newuser = {
        name: this.user.name,
        email: this.user.email,
        username: this.user.firstName,
        userState: 1,
        password: 'qwer1234',
        authPhoto: this.user.provider == 'FACEBOOK'? this.user.response.picture.data.url: this.user.photoUrl
      }
      this.authServices.registerUser(Newuser,this.file).subscribe(data => {
        if(data.success) {
          const user = {
            email: this.user.email,
            password: Newuser.password
          }

          this.authServices.authenticateUser(user).subscribe(data => {
            if(data.success) {
              this.loading = false;
              switch (Newuser.userState) {
                case 0:
                  this.router.navigate(['/admin']);
                  break;
                case 1:
                  this.router.navigate(['/dashboard-user']);
                break;
                case 2:
                  this.router.navigate(['/dashboard-driver']);
                break;
                case 3:
                  this.router.navigate(['/dashboard-company']);
                break;
              
                default:
                  break;
              }
              this.authServices.storeUserData(data.token, data.user);
            }
        });
        } else {
          this.router.navigate(['/register-user']);
        }
      });
    });
  }

  processFile(event: HtmlInputEvent): void {

    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // //Register user
    this.authServices.registerUser(user,this.file).subscribe(data => {
      if(data.success) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }


  signOut(): void {
    this.authService.signOut();
  }

}
