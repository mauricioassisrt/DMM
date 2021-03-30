import { GoogleMapComponent } from './../google-map/google-map.component';

import { LancamentosService } from './../services/lancamentos.service';
import { ActionSheetController, MenuController, ModalController, Platform, PopoverController } from '@ionic/angular';
import { Lancamentos } from './../model/lancamentos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmobService } from '../services/admob.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


declare var google;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  reverseGeocondingResults: string = "";
  map: any;
  marker: any;
  latitude: any = "";
  longitude: any = "";
  timestamp: any = "";
  listaLancamentos = [];
  saldoMes = 0;
  valorRecebido = 0;
  valorReceber = 0;
  valorDespesa = 0;
  valorPagar = 0;

  constructor(
    private admobService: AdmobService,
    public platform: Platform,
    public geolocation: Geolocation,
    public goocoder: NativeGeocoder,
    public modalCtrl: ModalController,
    public router: Router,
    public modalControll: ModalController,
    public lancamentoService: LancamentosService) {

    this.admobService.showBanner();

    this.platform.ready().then(() => {
      var mapOptions = {
        center: { lat: this.latitude.toString(), lng: this.longitude.toString() },
        zoom: 7,
      }
      this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    })

    this.GetLocation();
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

      ref.timestamp = (new Date(position.timestamp)).toString();

    })

  }

  ngOnInit() {

    this.admobService.showBanner();
    let Lancamentos = this.lancamentoService.buscarTodos();
    Lancamentos.snapshotChanges().subscribe(res => {
      this.saldoMes = 0;
      this.valorRecebido = 0;
      this.valorDespesa = 0;

      res.forEach(item => {
        let a = item.payload.toJSON();
        if (a['tipo'] == 'recebido') {
          this.valorRecebido += parseFloat(a['valorLancamento']);
        } else {
          this.valorDespesa += parseFloat(a['valorLancamento']);

        }
      })

      this.saldoMes = this.valorRecebido - this.valorDespesa;
      console.log("Linha 43 " + this.saldoMes);

    })

  }

  chamarRecebidos() {
    this.router.navigate(['recebidos']);
  }
  chamarDespesas() {
    this.router.navigate(['despesas']);
  }
  async chamaMap() {
    console.log('MAPS linha 102')
    const modal = await this.modalControll.create({
      component: GoogleMapComponent
    });
    return await modal.present();
  }
  selecionarMes() {
    this.ngOnInit();
  }
  interstitial() {
    this.admobService.showInterstitial();
  }

  banner() {
    this.admobService.showBanner();
  }

  reward() {
    this.admobService.showRewardVideo();
  }

}
