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

}
