import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {


  isAuth : boolean = false ;
//tester le pipe date
// lastUpdate = new Date(); // I correct the error TS2769: No overload matches this call by adding <Date>
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
appareilSubscription!: Subscription;

  constructor(private appareilService: AppareilService){
    setTimeout(
      ()=>{this.isAuth = !this.isAuth;},2000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
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

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}
