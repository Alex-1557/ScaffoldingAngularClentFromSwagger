import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { FlushNotification_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationFlushNotification',
  templateUrl: 'Notification-FlushNotification-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationFlushNotificationComponent
  extends BaseFormComponent implements OnInit {

  NotificationFlushNotificationResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  FlushNotification_Submit() {
    var FlushNotification_Request = <FlushNotification_Get>{};

    this.NotificationService.FlushNotification(FlushNotification_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationFlushNotificationResult = result;
      }, error => {
        console.log(error);
      });
  }
}