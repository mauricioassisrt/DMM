import { ModalController } from '@ionic/angular';
import { FormComponent } from './../despesas/form/form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage implements OnInit {

  constructor(public modalController: ModalController) {}
  async chamarFormulario() {
    const modal = await this.modalController.create({
      component: FormComponent
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
