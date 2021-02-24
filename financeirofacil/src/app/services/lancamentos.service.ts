import { Injectable } from '@angular/core';
import { Lancamentos } from '../model/lancamentos';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {
  lancamentoLista:AngularFireList<any>;
  lancamentoObjeto:AngularFireObject<any>;

  constructor(private db:AngularFireDatabase) {
      this.buscarTodos();
   }

   criarLancamento(lan:Lancamentos){
     return this.lancamentoLista.push(lan);
   }
   buscarPorId(id:string){
     this.lancamentoObjeto = this.db.object('/lancamentos/'+id);
     return this.lancamentoObjeto;
   }
   atualizarLancamento(id:string, lan:Lancamentos){
    this.buscarPorId(id);
    return this.lancamentoObjeto.update(lan);
  }

  removerLancamento(id:string){
    this.buscarPorId(id);
    this.lancamentoObjeto.remove();

  }

  buscarTodos(){
    this.lancamentoLista=this.db.list('/lancamentos');
    return this.lancamentoLista;
  }
}
