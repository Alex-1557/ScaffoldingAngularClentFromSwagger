import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { NotifyOneClientSRV_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationNotifyOneClientSRV',
  templateUrl: 'Notification-NotifyOneClientSRV-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationNotifyOneClientSRVComponent
  extends BaseFormComponent implements OnInit {

  NotificationNotifyOneClientSRVResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      NotifyOneClientSRV_ConnectionID: new FormControl(),

    });
  }

  NotifyOneClientSRV_Submit() {
    var NotifyOneClientSRV_Request = <NotifyOneClientSRV_Get>{};
    NotifyOneClientSRV_Request.ConnectionID = this.form.controls['NotifyOneClientSRV_ConnectionID'].value;


    this.NotificationService.NotifyOneClientSRV(NotifyOneClientSRV_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationNotifyOneClientSRVResult = result;
      }, error => {
        console.log(error);
      });
  }
}