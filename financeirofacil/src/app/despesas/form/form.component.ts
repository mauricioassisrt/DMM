import { ModalController } from '@ionic/angular';
import { Lancamentos } from './../../model/lancamentos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  lancamento: Lancamentos;
  constructor(public ModalController:ModalController) { }

  ngOnInit() {}

}
