import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebidos',
  templateUrl: './recebidos.page.html',
  styleUrls: ['./recebidos.page.scss'],
})
export class RecebidosPage implements OnInit {



  constructor(public router:Router) {}
   chamarFormulario(){
    this.router.navigate(['recebidos/form']);
   }
  ngOnInit() {
  }

}
