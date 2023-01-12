import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { BashJobFinished_Post } from './Notification-input'

@Component({
  selector: 'app-NotificationBashJobFinished',
  templateUrl: 'Notification-BashJobFinished-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationBashJobFinishedComponent
  extends BaseFormComponent implements OnInit {

  NotificationBashJobFinishedResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      BashJobFinished_i: new FormControl(),
      BashJobFinished_crDate: new FormControl(),
      BashJobFinished_toServer: new FormControl(),
      BashJobFinished_toVm: new FormControl(),
      BashJobFinished_toUser: new FormControl(),
      BashJobFinished_command: new FormControl(),
      BashJobFinished_subscribeId: new FormControl(),
      BashJobFinished_comment: new FormControl(),
      BashJobFinished_lastUpdate: new FormControl(),

    });
  }

  BashJobFinished_Submit() {
    var BashJobFinished_Request = <BashJobFinished_Post>{};
    BashJobFinished_Request.i = this.form.controls['BashJobFinished_i'].value;
    BashJobFinished_Request.crDate = this.form.controls['BashJobFinished_crDate'].value;
    BashJobFinished_Request.toServer = this.form.controls['BashJobFinished_toServer'].value;
    BashJobFinished_Request.toVm = this.form.controls['BashJobFinished_toVm'].value;
    BashJobFinished_Request.toUser = this.form.controls['BashJobFinished_toUser'].value;
    BashJobFinished_Request.command = this.form.controls['BashJobFinished_command'].value;
    BashJobFinished_Request.subscribeId = this.form.controls['BashJobFinished_subscribeId'].value;
    BashJobFinished_Request.comment = this.form.controls['BashJobFinished_comment'].value;
    BashJobFinished_Request.lastUpdate = this.form.controls['BashJobFinished_lastUpdate'].value;


    this.NotificationService.BashJobFinished(BashJobFinished_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationBashJobFinishedResult = result;
      }, error => {
        console.log(error);
      });
  }
}