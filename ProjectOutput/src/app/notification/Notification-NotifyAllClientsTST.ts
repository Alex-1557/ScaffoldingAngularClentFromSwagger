import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { NotifyAllClientsTST_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationNotifyAllClientsTST',
  templateUrl: 'Notification-NotifyAllClientsTST-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationNotifyAllClientsTSTComponent
  extends BaseFormComponent implements OnInit {

  NotificationNotifyAllClientsTSTResult?: any;

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

  NotifyAllClientsTST_Submit() {
    var NotifyAllClientsTST_Request = <NotifyAllClientsTST_Get>{};

    this.NotificationService.NotifyAllClientsTST(NotifyAllClientsTST_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationNotifyAllClientsTSTResult = result;
      }, error => {
        console.log(error);
      });
  }
}