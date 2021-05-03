import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth : boolean = false ;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

//test ngFor

appareils = [
  {
    name: 'Machine à laver',
    status: 'éteint'
  },
  {
    name: 'Frigo',
    status: 'allumé'
  },
  {
    name: 'Ordinateur',
    status: 'éteint'
  }
];




  constructor(){
    setTimeout(
      ()=>{this.isAuth = !this.isAuth;},2000
    );
  }
  onAllumer = () => alert("allumés");
}
