import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { AddBashJob_Post } from './Notification-input'

@Component({
  selector: 'app-NotificationAddBashJob',
  templateUrl: 'Notification-AddBashJob-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationAddBashJobComponent
  extends BaseFormComponent implements OnInit {

  NotificationAddBashJobResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddBashJob_toServer: new FormControl(),
      AddBashJob_toVm: new FormControl(),
      AddBashJob_sshDecryptPass: new FormControl(),
      AddBashJob_subscribeId: new FormControl(),
      AddBashJob_toUser: new FormControl(),
      AddBashJob_command: new FormControl(),
      AddBashJob_comment: new FormControl(),

    });
  }

  AddBashJob_Submit() {
    var AddBashJob_Request = <AddBashJob_Post>{};
    AddBashJob_Request.toServer = this.form.controls['AddBashJob_toServer'].value;
    AddBashJob_Request.toVm = this.form.controls['AddBashJob_toVm'].value;
    AddBashJob_Request.sshDecryptPass = this.form.controls['AddBashJob_sshDecryptPass'].value;
    AddBashJob_Request.subscribeId = this.form.controls['AddBashJob_subscribeId'].value;
    AddBashJob_Request.toUser = this.form.controls['AddBashJob_toUser'].value;
    AddBashJob_Request.command = this.form.controls['AddBashJob_command'].value;
    AddBashJob_Request.comment = this.form.controls['AddBashJob_comment'].value;


    this.NotificationService.AddBashJob(AddBashJob_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationAddBashJobResult = result;
      }, error => {
        console.log(error);
      });
  }
}