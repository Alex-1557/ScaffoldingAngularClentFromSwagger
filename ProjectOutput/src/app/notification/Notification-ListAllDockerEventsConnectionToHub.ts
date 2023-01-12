import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { ListAllDockerEventsConnectionToHub_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationListAllDockerEventsConnectionToHub',
  templateUrl: 'Notification-ListAllDockerEventsConnectionToHub-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationListAllDockerEventsConnectionToHubComponent
  extends BaseFormComponent implements OnInit {

  NotificationListAllDockerEventsConnectionToHubResult?: any;

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

  ListAllDockerEventsConnectionToHub_Submit() {
    var ListAllDockerEventsConnectionToHub_Request = <ListAllDockerEventsConnectionToHub_Get>{};


    this.NotificationService.ListAllDockerEventsConnectionToHub(ListAllDockerEventsConnectionToHub_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationListAllDockerEventsConnectionToHubResult = result;
      }, error => {
        console.log(error);
      });
  }
}