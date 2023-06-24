import { Component, OnInit } from '@angular/core';
import {AccommodationObject} from "../../model/accommodation-object";
import {AccommodationObjectService} from "../../service/accommodation-object/accommodation-object.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  accommodationObjects: AccommodationObject[] = [];
  constructor(private accommodationObjectService: AccommodationObjectService) { }

  ngOnInit(): void {
    this.accommodationObjectService.findAll().subscribe(data => {
      this.accommodationObjects = data; })
  }

}
