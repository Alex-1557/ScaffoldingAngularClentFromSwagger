import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmImageService } from "./VmImage-service"
import { ListPartitionImagesFromDB_Get } from './VmImage-input'

@Component({
  selector: 'app-VmImageListPartitionImagesFromDB',
  templateUrl: 'VmImage-ListPartitionImagesFromDB-form.html',
  styleUrls: ['./vm-image.component.css']
})

export class VmImageListPartitionImagesFromDBComponent
  extends BaseFormComponent implements OnInit {

  VmImageListPartitionImagesFromDBResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmImageService: VmImageService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      
    });
  }

  ListPartitionImagesFromDB_Submit() {
    var ListPartitionImagesFromDB_Request = <ListPartitionImagesFromDB_Get>{};

    this.VmImageService.ListPartitionImagesFromDB(ListPartitionImagesFromDB_Request)
      .subscribe(result => {
        console.log(result);
        this.VmImageListPartitionImagesFromDBResult = result;
      }, error => {
        console.log(error);
      });
  }
}