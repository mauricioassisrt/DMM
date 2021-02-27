import { LancamentosService } from './../services/lancamentos.service';
import { ModalController } from '@ionic/angular';
import { Lancamentos } from './../model/lancamentos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  listaLancamentos = [];
  saldoMes = 0;
  valorRecebido = 0;
  valorReceber=0;
  valorDespesa = 0;
  valorPagar = 0;

  constructor(public router: Router, public modalControll: ModalController, public lancamentoService: LancamentosService) { }

  ngOnInit() {
    this.saldoMes = 0;
    this.valorRecebido = 0;
    this.valorReceber=0;
    this.valorDespesa = 0;
    this.valorPagar = 0;
    let Lancamentos = this.lancamentoService.buscarTodos();
    Lancamentos.snapshotChanges().subscribe(res => {
      this.listaLancamentos = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
       if(a['tipo']='recebido'){
         this.valorRecebido+=parseFloat(a['valorLancamento']);
       }else{
         this.valorDespesa+=parseFloat(a['valorLancamento']);
       }
      })
    })

  }
  chamarRecebidos() {
    this.router.navigate(['recebidos']);
  }
  chamarDespesas() {
    this.router.navigate(['despesas']);
  }
}
