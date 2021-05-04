import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent {
  isAuth : boolean = false ;
//tester le pipe date
  // lastUpdate = new Date();
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      ()=> {
        resolve(date);
      }, 2000
    );
  })

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
