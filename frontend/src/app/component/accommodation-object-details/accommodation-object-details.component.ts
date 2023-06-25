import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccommodationObjectService} from "../../service/accommodation-object/accommodation-object.service";
import {AccommodationObject} from "../../model/accommodation-object";
import {LocalizationService} from "../../service/localization/localization.service";
import {
  AccommodationObjectTypeService
} from "../../service/accommodation-object-type/accommodation-object-type.service";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-accommodation-object-details',
  templateUrl: './accommodation-object-details.component.html',
  styleUrls: ['./accommodation-object-details.component.css']
})
export class AccommodationObjectDetailsComponent implements OnInit {
  accommodationObject: AccommodationObject;
  constructor(private route: ActivatedRoute,
              private accommodationObjectService: AccommodationObjectService,
              private localizationService: LocalizationService,
              private accommodationObjectTypeService: AccommodationObjectTypeService,
              private userService: UserService) { }



  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.accommodationObjectService.findById(id).subscribe(data => {
      this.accommodationObject = data;

// Access the 'id' property within the subscription
      const localizationId = this.accommodationObject.localisation;
      const accommodationObjectTypeId = this.accommodationObject.accommodationObjectType;
      const ownerId = this.accommodationObject.owner;

      console.log('ID:', id);
      console.log('ID:', localizationId);
      console.log('ID:', accommodationObjectTypeId);
      console.log('ID:', ownerId);
    console.log(this.accommodationObject)
      // Retrieve the related entities using their respective services
      this.localizationService.findById(localizationId).subscribe(localization => {
        this.accommodationObject.localisation = localization;
      });

      this.accommodationObjectTypeService.findById(accommodationObjectTypeId).subscribe(accommodationObjectType => {
        this.accommodationObject.accommodationObjectType = accommodationObjectType;
      });

      this.userService.findById(ownerId).subscribe(owner => {
        this.accommodationObject.owner = owner;
      });
    });
  }

}
