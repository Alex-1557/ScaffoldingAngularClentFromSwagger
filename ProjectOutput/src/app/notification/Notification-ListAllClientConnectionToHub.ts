import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from "./Notification-service"
import { ListAllClientConnectionToHub_Get } from './Notification-input'

@Component({
  selector: 'app-NotificationListAllClientConnectionToHub',
  templateUrl: 'Notification-ListAllClientConnectionToHub-form.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationListAllClientConnectionToHubComponent
  extends BaseFormComponent implements OnInit {

  NotificationListAllClientConnectionToHubResult?: any;

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

  ListAllClientConnectionToHub_Submit() {
    var ListAllClientConnectionToHub_Request = <ListAllClientConnectionToHub_Get>{};


    this.NotificationService.ListAllClientConnectionToHub(ListAllClientConnectionToHub_Request)
      .subscribe(result => {
        console.log(result);
        this.NotificationListAllClientConnectionToHubResult = result;
      }, error => {
        console.log(error);
      });
  }
}