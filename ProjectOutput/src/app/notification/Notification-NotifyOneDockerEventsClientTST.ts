import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { NotifyOneDockerEventsClientTST_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationNotifyOneDockerEventsClientTST',
  templateUrl: 'Notification-NotifyOneDockerEventsClientTST-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationNotifyOneDockerEventsClientTSTComponent
  extends BaseFormComponent implements OnInit {

  NotificationNotifyOneDockerEventsClientTSTResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      NotifyOneDockerEventsClientTST_ConnectionID: new FormControl(),

    });
  }

  NotifyOneDockerEventsClientTST_Submit() {
    var NotifyOneDockerEventsClientTST_Request = <NotifyOneDockerEventsClientTST_Get>{};
    NotifyOneDockerEventsClientTST_Request.ConnectionID = this.form.controls['NotifyOneDockerEventsClientTST_ConnectionID'].value;


    this.NotificationService.NotifyOneDockerEventsClientTST(NotifyOneDockerEventsClientTST_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationNotifyOneDockerEventsClientTSTResult = result;
      }, error => {
        console.log(error);
      });
  }
}