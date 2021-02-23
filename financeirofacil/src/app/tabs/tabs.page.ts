import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public router:Router) {}
  chamarHome(){
   this.router.navigate(['tab1']);
  }
}
