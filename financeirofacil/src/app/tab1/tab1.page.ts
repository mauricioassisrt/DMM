
import { LancamentosService } from './../services/lancamentos.service';
import { ActionSheetController, MenuController, ModalController, Platform, PopoverController } from '@ionic/angular';
import { Lancamentos } from './../model/lancamentos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmobService } from '../services/admob.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  listaLancamentos = [];
  saldoMes = 0;
  valorRecebido = 0;
  valorReceber = 0;
  valorDespesa = 0;
  valorPagar = 0;

  constructor(private admobService: AdmobService,


    public modalCtrl: ModalController,

    public router: Router,
    public modalControll: ModalController,
    public lancamentoService: LancamentosService) {

      this.admobService.showBanner();



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
