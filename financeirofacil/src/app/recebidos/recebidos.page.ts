
import { Lancamentos } from '../model/lancamentos';
import { LancamentosService } from '../services/lancamentos.service';
import { FormComponent } from './form/form.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recebidos',
  templateUrl: './recebidos.page.html',
  styleUrls: ['./recebidos.page.scss'],
})
export class RecebidosPage implements OnInit {
  listaLancamentos = [];

  constructor(public modalController: ModalController, public lancamentoService:LancamentosService) { }

  ngOnInit() {

    let Lancamentos = this.lancamentoService.buscarTodos();
    Lancamentos.snapshotChanges().subscribe(res => {
      this.listaLancamentos = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        // let mesSalvo = new Date(a['dataLacamento']).getMonth();
        // let anoSalvo = new Date(a['dataLacamento']).getFullYear();
        //  if (mesSelecionado == mesSalvo && anoSelecionado == anoSalvo && a['tipo']=='recebido') {
        if (a['tipo'] == 'recebido') {
          a['key'] = item.key;
          this.listaLancamentos.push(a as Lancamentos);
        }
      })
    })

  }
  async alterarLancamento(key) {
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        'key': key,
      }
    });
    return await modal.present();
  }
  async chamarFormulario() {
    const modal = await this.modalController.create({
      component: FormComponent
    });
    return await modal.present();
  }
}
