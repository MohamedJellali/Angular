import { AppareilService } from './services/appareil.service';
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

appareils!: any[];

  constructor(private appareilService: AppareilService){
    setTimeout(
      ()=>{this.isAuth = !this.isAuth;},2000
    );
  }

ngOnInit(){
  this.appareils = this.appareilService.appareils;

}

onAllumer(){
  this.appareilService.switchOnAll();
}
onEteindre(){
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilService.switchOffAll();
  } else {
    return console.log('resté allumé');
  }
}

  onAllumerTest = () => alert("allumés");
}
