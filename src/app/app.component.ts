import { Observable, interval, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent implements OnInit {

  secondes!: number;
  counterSubscription!: Subscription;
  
  ngOnInit(){
    //observable
    const counter = interval(1000);
    //y a pas d'erreur à handle mais je vais écrire l'intégration complète de fct subscribe()
    this.counterSubscription = counter.subscribe(
      (value)=>{
        this.secondes = value;
      },
      (error)=>{
        alert('Error occured : '+ error);
      },
      ()=>{
        alert('Observable complete !')
      }
    )
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
