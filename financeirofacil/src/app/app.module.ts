import { GoogleMapComponent } from './google-map/google-map.component';
import { AdmobService } from './services/admob.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { registerLocaleData, CommonModule } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { HttpClientModule } from '@angular/common/http';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx";
registerLocaleData(ptBr);


@NgModule({
  declarations: [AppComponent, GoogleMapComponent],

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule],
  providers: [
    AdMobFree,
    Geolocation,
    NativeGeocoder,
    AdmobService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
