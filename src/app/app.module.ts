import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AuthServices } from './common/services/auth.service';
import { NgIdleModule } from '@ng-idle/core'
import { JwtHelperService, JWT_OPTIONS, JwtModule  } from '@auth0/angular-jwt';
import { SocialLoginModule } from 'angularx-social-login';
import { SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider  } from 'angularx-social-login';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register/register-user/register-user.component';
import { RegisterCompanyComponent } from './register/register-company/register-company.component';
import { RegisterDriverComponent } from './register/register-driver/register-driver.component';
import { LoginCompanyComponent } from './login/login-company/login-company.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { ProfileDriverComponent } from './profile/profile-driver/profile-driver.component';
import { ProfileCompanyComponent } from './profile/profile-company/profile-company.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';
import { AdminMasterComponent } from './admin-master/admin-master.component';
import { DashboardUserComponent } from './dashboard/dashboard-user/dashboard-user.component';
import { DashboardCompanyComponent } from './dashboard/dashboard-company/dashboard-company.component';
import { DashboardDriverComponent } from './dashboard/dashboard-driver/dashboard-driver.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotificationService } from './common/services/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { MenuRegisteredComponent } from './menu-registered/menu-registered.component';
import { ForgotCompanyComponent } from './forgot/forgot-company/forgot-company.component';
import { ForgotUserComponent } from './forgot/forgot-user/forgot-user.component';
import { ForgotDriverComponent } from './forgot/forgot-driver/forgot-driver.component';
import { ResetCompanyComponent } from './reset/reset-company/reset-company.component';
import { ResetUserComponent } from './reset/reset-user/reset-user.component';
import { ResetDriverComponent } from './reset/reset-driver/reset-driver.component';

export function tokenGetter() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MapComponent,
    SettingsComponent,
    HomeComponent,
    RegisterUserComponent,
    RegisterCompanyComponent,
    RegisterDriverComponent,
    LoginCompanyComponent,
    LoginDriverComponent,
    ProfileDriverComponent,
    ProfileCompanyComponent,
    AdminMasterComponent,
    DashboardUserComponent,
    DashboardCompanyComponent,
    DashboardDriverComponent,
    ProfileUserComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    NotFoundComponent,
    NotificationComponent,
    MenuRegisteredComponent,
    ForgotCompanyComponent,
    ForgotUserComponent,
    ForgotDriverComponent,
    ResetCompanyComponent,
    ResetUserComponent,
    ResetDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    SocialLoginModule,
    NgIdleModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhos:8080","foo.com", "bar.com"],
      },
    }),
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places','geometry','weather']
    }),
    AgmDirectionModule
  ],
  providers: [NotificationService,AuthServices, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '637451349426-cboh4fm1lruorkdbhgr75jb584r05b8n.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('427713864913309')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]

  //AIzaSyC6XvMo8SNV30Pylr97UwPP6EPi1LGn_9A   key para google maps
})
export class AppModule { }
