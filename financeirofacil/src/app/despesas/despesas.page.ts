
import { Lancamentos } from '../model/lancamentos';
import { LancamentosService } from '../services/lancamentos.service';
import { FormComponent } from './form/form.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage implements OnInit {

  listaLancamentos = [];

  constructor(public modalControll: ModalController, public lancamentoService:LancamentosService) { }

  ngOnInit() {

    let Lancamentos = this.lancamentoService.buscarTodos();
    Lancamentos.snapshotChanges().subscribe(res => {
      this.listaLancamentos = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        // let mesSalvo = new Date(a['dataLacamento']).getMonth();
        // let anoSalvo = new Date(a['dataLacamento']).getFullYear();
        //  if (mesSelecionado == mesSalvo && anoSelecionado == anoSalvo && a['tipo']=='recebido') {
        if (a['tipo'] == 'despesas') {
          a['key'] = item.key;
          this.listaLancamentos.push(a as Lancamentos);
        }
      })
    })

  }
  async alterarLancamentos(key) {
    const modal = await this.modalControll.create({
      component: FormComponent,
      componentProps: {
        'key': key,
      }
    });
    return await modal.present();
  }
  async chamarFormularios() {
    console.log('despesas page.ts linha 47')
    const modal = await this.modalControll.create({
      component: FormComponent
    });
    return await modal.present();
  }
}
