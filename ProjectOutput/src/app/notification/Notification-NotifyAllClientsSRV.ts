import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { NotifyAllClientsSRV_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationNotifyAllClientsSRV',
  templateUrl: 'Notification-NotifyAllClientsSRV-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationNotifyAllClientsSRVComponent
  extends BaseFormComponent implements OnInit {

  NotificationNotifyAllClientsSRVResult?: any;

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

  NotifyAllClientsSRV_Submit() {
    var NotifyAllClientsSRV_Request = <NotifyAllClientsSRV_Get>{};

    this.NotificationService.NotifyAllClientsSRV(NotifyAllClientsSRV_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationNotifyAllClientsSRVResult = result;
      }, error => {
        console.log(error);
      });
  }
}