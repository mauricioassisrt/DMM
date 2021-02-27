import { ModalController } from '@ionic/angular';
import { Lancamentos } from './../../model/lancamentos';
import { Component, OnInit, Input } from '@angular/core';
import { LancamentosService } from '../../services/lancamentos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  lancamento: Lancamentos;
  constructor(
    public ModalController: ModalController,
    public lancamentoService: LancamentosService
  ) {}
  @Input() key: string;

  ngOnInit() {
    if (this.key != undefined) {
      this.lancamentoService
        .buscarPorId(this.key)
        .valueChanges()
        .subscribe((res) => {
          this.lancamento = res;
        });
    } else {
      this.lancamento = {
        key: '',
        descricao: '',
        valorLancamento: 0,
        tipo: 'recebido',
        data: new Date(),
        categoria: 'Sálario',
      };
    }
  }

  salvarLancamento() {
    if (this.key == undefined) {
      this.lancamentoService
        .criarLancamento(this.lancamento)
        .then((res) => {
          console.log('no try');
          console.log(res);
          this.dismiss
        })
        .catch((error) => console.log(error));
    } else {
      this.lancamentoService
        .atualizarLancamento(this.key, this.lancamento)
        .then((res) => {
          console.log('no try');
          console.log(res);
          this.dismiss();
        })
        .catch((error) => console.log(error));
    }

  }

  dismiss() {
    this.ModalController.dismiss({
      'dismissed': true,
    });
  }
}
