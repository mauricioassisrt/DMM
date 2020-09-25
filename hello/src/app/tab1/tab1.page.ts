import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  valor1;
  valor2;
  resultado;
  constructor() { }

  somar() {

    this.resultado = this.valor1 + this.valor2;
    console.log(this.resultado);
  }
}
