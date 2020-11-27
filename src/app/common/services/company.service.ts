import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CompanyService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  authToken: any;
  company: any;
  isDev: boolean = false;

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) {
      this.isDev = true;  // Change to false when you're gonna deploy your app, true when is on develop 
  }

  registerCompany(company,  photo:any):Observable<any> {
    const fd = new FormData();
    fd.append('companyName',company.companyName);
    fd.append('username',company.username);
    fd.append('phone',company.phone);
    fd.append('userState',company.userState);
    fd.append('email',company.email);
    fd.append('password',company.password);
    fd.append('lat',company.lat);
    fd.append('lng',company.lng);
    fd.append('bussinesSelected',company.bussinesSelected);
    fd.append('image', photo);

    if(this.isDev) {
      return this.httpClient.post<any>('http://localhost:8080/company/register', fd);
    }else{
      return this.httpClient.post<any>('company/register', fd);
    }
  }

  authenticateCompany(company:any): Observable<any> {
    if(this.isDev){
      return this.httpClient.post('http://localhost:8080/company/authenticate', company, { headers: this.headers});
    }else{
      return this.httpClient.post('company/authenticate', company, { headers: this.headers});
    }
  }

//   getUsers() {
//     let headers = new Headers();
//     this.loadToken();
//     headers.append('Authorization', this.authToken);
//     headers.append('Content-Type', 'application/json');
//     if(this.isDev){
//       return this.http.get('http://localhost:8080/users/profile/getAllUsers', {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.get('users/profile/getAllUsers', {headers: headers}).map(res => res.json());
//     }
//   }

//   updateUsers(user) { 
//     let headers = new Headers();
//     headers.append('Authorization', this.authToken);
//     headers.append('Content-Type', 'application/json');
//     const token = localStorage.getItem('id_token');
//     this.authToken = token;
//     this.storeUserData(token,user);
//     if(this.isDev){
//       return this.http.put('http://localhost:8080/users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.put('users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
//     }
//   }

//   getProfile() {
//     let headers = new Headers();
//     this.loadToken();
//     headers.append('Authorization', this.authToken);
//     headers.append('Content-Type', 'application/json');
//     if(this.isDev){
//       return this.http.get('http://localhost:8080/users/profile', {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.get('users/profile', {headers: headers}).map(res => res.json());
//     }
//   }

//   getSettings() {
//     let headers = new Headers();
//     this.loadToken();
//     headers.append('Authorization', this.authToken);
//     headers.append('Content-Type', 'application/json');
//     if(this.isDev){
//       return this.http.get('http://localhost:8080/users/settings', {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.get('users/settings', {headers: headers}).map(res => res.json());
//     }
//   }

//   getUserMessages(id) {
//     let headers = new Headers();
//     this.loadToken();
//     headers.append('Authorization', this.authToken);
//     headers.append('Content-Type', 'application/json');
//     if(this.isDev){
//       return this.http.get('http://localhost:8080/users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.get('users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
//     }
//   }

//   //New message 

//   sendMessage(message) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     if(this.isDev) {
//       return this.http.post('http://localhost:8080/users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.post('users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
//     }
//   }

//   forgotPassword(email) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     if(this.isDev) {
//       return this.http.post('http://localhost:8080/users/forgot', email, {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.post('users/forgot', email, {headers: headers}).map(res => res.json());
//     }
//   }

//   resetPassword(reset) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     if(this.isDev) {
//       return this.http.post('http://localhost:8080/users/reset/', reset,  {headers: headers}).map(res => res.json());
//     }else{
//       return this.http.post('users/reset', reset, {headers: headers}).map(res => res.json());
//     }
//   }

  storeUserData(token, company) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('company', JSON.stringify(company));
    this.authToken = token;
    this.company = company;
  }

  getLocalCompany(){
    return localStorage.getItem("company");
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    const token: string = localStorage.getItem('id_token');
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    this.authToken = null;
    this.company = null;
    localStorage.clear();
  }
}