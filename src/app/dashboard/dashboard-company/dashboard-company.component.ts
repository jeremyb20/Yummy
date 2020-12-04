import { Component, ElementRef, NgZone, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription, from } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MediaResponse, MediaService } from '../../common/services/media.service';
import { darkStyle, lightStyle } from '../../common/constants/map-theme';
import * as moment from 'moment';
import { CompanyService } from 'src/app/common/services/company.service';
import { NewMenuResponse } from './dashboard-company-response'
import { NotificationService } from 'src/app/common/services/notification.service';
declare var $: any;
declare const google: any; 

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-dashboard-company',
  templateUrl: './dashboard-company.component.html',
  styleUrls: ['./dashboard-company.component.scss']
})
export class DashboardCompanyComponent implements OnInit, OnDestroy {
  private mediaSubscription: Subscription;
  @Input() cost;
  newMenuForm: FormGroup;
  submitted = false;
  userLogged: any;
  user : any;
  Media: MediaResponse;
  id: number = 1;
  myfoodMenu: NewMenuResponse[] = [];
  timeSeconds: number =  6000;
  file : File;
  photoSelected: String | ArrayBuffer;

  hideMsg: boolean = false; 
  ShowMsg: string;


  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private companyService: CompanyService, private media: MediaService, private formBuilder: FormBuilder, private _notificationSvc: NotificationService) {
      this.userLogged = this.companyService.getLocalCompany()
      this.user = JSON.parse(this.userLogged);

      this.mediaSubscription = this.media.subscribeMedia().subscribe(media => {
        this.Media = media;
      });

      this.getMyListMenu()
  }

  get f() { return this.newMenuForm.controls; }

  ngOnInit() {
    this.newMenuForm = this.formBuilder.group({
      foodName: ['', Validators.required],
      cost: ['', [Validators.minLength(3),Validators.required,Validators.pattern(/\d/)]],
      description: ['', Validators.required],
    });
  }

  getMyListMenu(){
    this.companyService.getMyMenuList(this.user.id).subscribe(data => {
      if(data.length>0) {
        this.myfoodMenu = data;
      }
    },
    error => {
      $('#newMenuModal').modal('hide');
      this._notificationSvc.warning('Hola '+this.user.companyName+'', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
    });
  }


  sendInfo() {
    this._notificationSvc.warning('Hello World', 'This is an information', 6000);
  }

  //Track order ticket

  stepTrackOrder(step: number){
    this.id = step;
  }

  newMenuSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.newMenuForm.invalid) {
        return;
    }
    var newMenu = {
      foodName: this.f.foodName.value,
      description: this.f.description.value,
      cost: this.f.cost.value,
      idCompany: this.user.id
    }

    this.companyService.registerNewMenu(newMenu,this.file).subscribe(data => {
      if(data.success) {
        $('#newMenuModal').modal('hide');
        this._notificationSvc.success('Hola '+this.user.companyName+'', data.msg, 6000);
        this.getMyListMenu();
      } else {
        $('#newMenuModal').modal('hide');
        this._notificationSvc.warning('Hola '+this.user.companyName+'', data.msg, 6000);
      }
    },
    error => {
      $('#newMenuModal').modal('hide');
      this._notificationSvc.warning('Hola '+this.user.companyName+'', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
    });
  }

  ngOnDestroy() {
    if(this.mediaSubscription){
      this.mediaSubscription.unsubscribe();
    }
  }

  processFile(event: HtmlInputEvent): void {

    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }


}

