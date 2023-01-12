import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { FlushAllNotificationForOneUser_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationFlushAllNotificationForOneUser',
  templateUrl: 'Notification-FlushAllNotificationForOneUser-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationFlushAllNotificationForOneUserComponent
  extends BaseFormComponent implements OnInit {

  NotificationFlushAllNotificationForOneUserResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      FlushAllNotificationForOneUser_UserID: new FormControl(),

    });
  }

  FlushAllNotificationForOneUser_Submit() {
    var FlushAllNotificationForOneUser_Request = <FlushAllNotificationForOneUser_Get>{};
    FlushAllNotificationForOneUser_Request.UserID = this.form.controls['FlushAllNotificationForOneUser_UserID'].value;


    this.NotificationService.FlushAllNotificationForOneUser(FlushAllNotificationForOneUser_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationFlushAllNotificationForOneUserResult = result;
      }, error => {
        console.log(error);
      });
  }
}