import { Component, OnInit, ViewChild } from '@angular/core';
import { google } from "google-maps";
declare var google;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})

export class GoogleMapComponent  {
  @ViewChild("map") mapElement;
  map:any;
  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  initMap(){
    let coords= new google.maps.LatLng(45, 100);
    let mapOptions = google.maps.MapOptions={
      center: coords,
      zoom: 14,

      mapTypeId:google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
