import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecebidosPageRoutingModule } from './recebidos-routing.module';

import { RecebidosPage } from './recebidos.page';
import { BrMaskerModule } from 'br-mask';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrMaskerModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RecebidosPageRoutingModule
  ],
  declarations: [RecebidosPage,FormComponent],
  entryComponents: [FormComponent]
})
export class RecebidosPageModule {}
