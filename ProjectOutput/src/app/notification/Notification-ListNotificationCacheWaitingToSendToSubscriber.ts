import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { ListNotificationCacheWaitingToSendToSubscriber_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationListNotificationCacheWaitingToSendToSubscriber',
  templateUrl: 'Notification-ListNotificationCacheWaitingToSendToSubscriber-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationListNotificationCacheWaitingToSendToSubscriberComponent
  extends BaseFormComponent implements OnInit {

  NotificationListNotificationCacheWaitingToSendToSubscriberResult?: any;

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

  ListNotificationCacheWaitingToSendToSubscriber_Submit() {
    var ListNotificationCacheWaitingToSendToSubscriber_Request = <ListNotificationCacheWaitingToSendToSubscriber_Get>{};


    this.NotificationService.ListNotificationCacheWaitingToSendToSubscriber(ListNotificationCacheWaitingToSendToSubscriber_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationListNotificationCacheWaitingToSendToSubscriberResult = result;
      }, error => {
        console.log(error);
      });
  }
}