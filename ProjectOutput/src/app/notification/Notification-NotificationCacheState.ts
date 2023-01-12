import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { NotificationCacheState_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationNotificationCacheState',
  templateUrl: 'Notification-NotificationCacheState-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationNotificationCacheStateComponent
  extends BaseFormComponent implements OnInit {

  NotificationNotificationCacheStateResult?: any;

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

  NotificationCacheState_Submit() {
    var NotificationCacheState_Request = <NotificationCacheState_Get>{};


    this.NotificationService.NotificationCacheState(NotificationCacheState_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationNotificationCacheStateResult = result;
      }, error => {
        console.log(error);
      });
  }
}