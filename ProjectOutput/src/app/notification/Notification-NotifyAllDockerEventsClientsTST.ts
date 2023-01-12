import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { NotifyAllDockerEventsClientsTST_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationNotifyAllDockerEventsClientsTST',
  templateUrl: 'Notification-NotifyAllDockerEventsClientsTST-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationNotifyAllDockerEventsClientsTSTComponent
  extends BaseFormComponent implements OnInit {

  NotificationNotifyAllDockerEventsClientsTSTResult?: any;

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

  NotifyAllDockerEventsClientsTST_Submit() {
    var NotifyAllDockerEventsClientsTST_Request = <NotifyAllDockerEventsClientsTST_Get>{};


    this.NotificationService.NotifyAllDockerEventsClientsTST(NotifyAllDockerEventsClientsTST_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationNotifyAllDockerEventsClientsTSTResult = result;
      }, error => {
        console.log(error);
      });
  }
}