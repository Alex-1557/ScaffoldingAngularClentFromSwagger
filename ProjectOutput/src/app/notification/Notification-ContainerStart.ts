import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { ContainerStart_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationContainerStart',
  templateUrl: 'Notification-ContainerStart-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationContainerStartComponent
  extends BaseFormComponent implements OnInit {

  NotificationContainerStartResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private NotificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ContainerStart_ID: new FormControl(),
      ContainerStart_name: new FormControl(),
      ContainerStart_Time: new FormControl(),
      ContainerStart_N: new FormControl(),

    });
  }

  ContainerStart_Submit() {
    var ContainerStart_Request = <ContainerStart_Get>{};
    ContainerStart_Request.ID = this.form.controls['ContainerStart_ID'].value;
    ContainerStart_Request.name = this.form.controls['ContainerStart_name'].value;
    ContainerStart_Request.Time = this.form.controls['ContainerStart_Time'].value;
    ContainerStart_Request.N = this.form.controls['ContainerStart_N'].value;


    this.NotificationService.ContainerStart(ContainerStart_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationContainerStartResult = result;
      }, error => {
        console.log(error);
      });
  }
}