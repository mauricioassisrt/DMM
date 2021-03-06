import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespesasPageRoutingModule } from './despesas-routing.module';

import { DespesasPage } from './despesas.page';
import { ReactiveFormsModule } from '@angular/forms';

import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrMaskerModule,

    IonicModule,
    DespesasPageRoutingModule
  ],
  declarations: [DespesasPage, FormComponent],
  entryComponents: [FormComponent]
})
export class DespesasPageModule {}
