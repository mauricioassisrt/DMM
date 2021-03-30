import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderOptions, NativeGeocoderResult
} from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  reverseGeocondingResults: string = "";

  map: any;
  marker: any;
  latitude: any = "";
  longitude: any = "";
  constructor(
    public platform: Platform,
    public geolocation: Geolocation,
    public goocoder: NativeGeocoder,
  ) {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((position) => {
        var latitude = position.coords.latitude;
        var logitude=position.coords.longitude;

        this.ReverseGeocoding(latitude, logitude);
        console.log("LATITUDE ",latitude);
      })
    })
    this.platform.ready().then(() => {
      var mapOptions = {
        center: { lat: this.latitude.toString(), lng: this.longitude.toString() },
        zoom: 7,
      }
      this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    })

    this.GetLocation();
  }
  ReverseGeocoding(latitude, longitude) {
    var options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1,
    }
    this.goocoder.reverseGeocode(latitude, longitude, options)
    .then((result: NativeGeocoderResult[]) =>this.reverseGeocondingResults  = (JSON.stringify(result[0])))

    .catch((error: any) => console.log(error));

  }

  GetLocation() {
    var ref = this;
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position) => {
      var gps = new google.maps.LatLng
        (position.coords.latitude, position.coords.longitude);
      if (ref.marker == null) {
        ref.marker = new google.maps.Marker({
          position: gps,
          map: ref.map,
          title: 'my position'
        })
      } else {
        ref.marker.setPosition(gps);
      }
      ref.map.panTo(gps);
      ref.latitude = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();

    })

  }
}
