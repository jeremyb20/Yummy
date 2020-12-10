import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../common/services/company.service';
import { MediaService } from '../common/services/media.service';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '../common/services/notification.service';
import { Router } from '@angular/router';
import { AuthServices } from '../common/services/auth.service';

declare const $: any; 

@Component({
  selector: 'app-menu-registered',
  templateUrl: './menu-registered.component.html',
  styleUrls: ['./menu-registered.component.scss']
})
export class MenuRegisteredComponent implements OnInit {
  foodMenuDataList: any;
  userLogged: any;
  user : any;

  constructor(private companyService: CompanyService, private media: MediaService, private formBuilder: FormBuilder, private _notificationSvc: NotificationService, private router: Router, private authService : AuthServices ) {
    this.userLogged = this.authService.getLocalUser()
    this.user = JSON.parse(this.userLogged);
    this.authService.getMyMenuList().subscribe(data => {
      console.log(data);
      if(data.length>0) {
        this.foodMenuDataList = data;
      }
    },
    error => {
      this._notificationSvc.warning('Hola '+this.user.username+'', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
    });
  }

  ngOnInit(): void {
    
  }

}
