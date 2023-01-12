import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { NotifyOneClientTST_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationNotifyOneClientTST',
  templateUrl: 'Notification-NotifyOneClientTST-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationNotifyOneClientTSTComponent
  extends BaseFormComponent implements OnInit {

  NotificationNotifyOneClientTSTResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      NotifyOneClientTST_ConnectionID: new FormControl(),

    });
  }

  NotifyOneClientTST_Submit() {
    var NotifyOneClientTST_Request = <NotifyOneClientTST_Get>{};
    NotifyOneClientTST_Request.ConnectionID = this.form.controls['NotifyOneClientTST_ConnectionID'].value;


    this.NotificationService.NotifyOneClientTST(NotifyOneClientTST_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationNotifyOneClientTSTResult = result;
      }, error => {
        console.log(error);
      });
  }
}