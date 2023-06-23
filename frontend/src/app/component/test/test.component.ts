import { Component, OnInit } from '@angular/core';
import {AccommodationObject} from "../../model/accommodation-object";
import {AccommodationObjectService} from "../../service/accommodation-object/accommodation-object.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccommodationObjectType} from "../../model/accommodation-object-type";


@Component({
  selector: 'app-book',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  accommodationObjects: AccommodationObject[] = [];
  accommodationObjectTest: AccommodationObject = new AccommodationObject();
  accommodationObjectSave: AccommodationObject;
  accommodationObjectType: AccommodationObjectType;


  constructor(private route: ActivatedRoute,
              private router: Router, private accommodationObjectService: AccommodationObjectService) {
        this.accommodationObjectSave = new AccommodationObject();
    this.accommodationObjectType= new AccommodationObjectType();
  }

  ngOnInit(): void {

    this.accommodationObjectService.findAll().subscribe(data => {
      this.accommodationObjects = data;
      this.accommodationObjectService.findById(6).subscribe(data => {
        this.accommodationObjectTest = data;
      })
    });


  }
  deleteAccommodationObject(id: number): void {
    this.accommodationObjectService.delete(id).subscribe(() => {
      // Remove the deleted object from the accommodationObjects array
      this.accommodationObjects = this.accommodationObjects.filter(obj => obj.id !== id);
    });
  }
  saveAccommodationObject(): void {

  this.accommodationObjectSave.name = "test";
  this.accommodationObjectSave.description = "test";
  this.accommodationObjectSave.header = "test";
  this.accommodationObjectSave.accommodationObjectType = this.accommodationObjectType;
  this.accommodationObjectSave.accommodationObjectType.id = 2;
  this.accommodationObjectService.save(this.accommodationObjectSave).subscribe( result => this.router.navigate(['/about']));
  }

}
