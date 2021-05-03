import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName!: string;

  appareilStatus :string = 'working';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus =()=> this.appareilStatus ;

 
}
