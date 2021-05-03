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

  constructor(){
    setTimeout(
      ()=>{this.isAuth = !this.isAuth;},2000
    );
  }
  onAllumer = () => alert("allumés");
}
