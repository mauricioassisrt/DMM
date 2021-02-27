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
        tipo: 'despesas',
        data: new Date(),
        categoria: 'Sálario',
      };
    }
  }

  salvarLancamento() {
    console.log('no salvar 40 linha ')
    if (this.key == undefined) {
      console.log('no if 42 linha ')
      this.lancamentoService
        .criarLancamento(this.lancamento)
        .then((res) => {
          console.log('no if linha 45');
          console.log(res);
          this.dismiss()
        })
        .catch((error) => console.log(error));
    } else {
      console.log('no editar 51 linha ')
      this.lancamentoService
        .atualizarLancamento(this.key, this.lancamento)
        .then((res) => {
          console.log('no else linha 55');
          console.log(res);
          this.dismiss();
        })
        .catch((error) => console.log(error));
    }

  }
  excluirLancamento(){
    console.log('no excluir 62 linha ')
    if(this.key!=undefined){
      this.lancamentoService.removerLancamento(this.key);
      this.dismiss();
    }
  }

  dismiss() {
    this.ModalController.dismiss({
      'dismissed': true,
    });
  }
}
