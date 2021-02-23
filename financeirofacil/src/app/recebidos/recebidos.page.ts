import { FormComponent } from './form/form.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recebidos',
  templateUrl: './recebidos.page.html',
  styleUrls: ['./recebidos.page.scss'],
})
export class RecebidosPage implements OnInit {


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
