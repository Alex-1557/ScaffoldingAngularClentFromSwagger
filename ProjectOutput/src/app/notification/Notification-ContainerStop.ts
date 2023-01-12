import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { ContainerStop_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationContainerStop',
  templateUrl: 'Notification-ContainerStop-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationContainerStopComponent
  extends BaseFormComponent implements OnInit {

  NotificationContainerStopResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ContainerStop_ID: new FormControl(),
      ContainerStop_name: new FormControl(),
      ContainerStop_Time: new FormControl(),
      ContainerStop_N: new FormControl(),

    });
  }

  ContainerStop_Submit() {
    var ContainerStop_Request = <ContainerStop_Get>{};
    ContainerStop_Request.ID = this.form.controls['ContainerStop_ID'].value;
    ContainerStop_Request.name = this.form.controls['ContainerStop_name'].value;
    ContainerStop_Request.Time = this.form.controls['ContainerStop_Time'].value;
    ContainerStop_Request.N = this.form.controls['ContainerStop_N'].value;


    this.NotificationService.ContainerStop(ContainerStop_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationContainerStopResult = result;
      }, error => {
        console.log(error);
      });
  }
}