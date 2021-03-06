import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
            id:2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
            id:3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

      constructor(private httpClient: HttpClient) {}

      saveAppareilsToServer() {
        this.httpClient
          .put('https://ocr-project-1cff3-default-rtdb.firebaseio.com/appareils.json', this.appareils)
          .subscribe(
            () => {
              alert('Enregistrement terminé !');
            },
            (error) => {
              alert('Erreur ! : ' + error);
            }
          );
    }

    getAppareilsFromServer() {
      this.httpClient
        .get<any[]>('https://ocr-project-1cff3-default-rtdb.firebaseio.com/appareils.json')
        .subscribe(
          (response) => {
            this.appareils = response;
            this.emitAppareilSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }

    addAppareil(name: string, status: string){
        const appareilObject = {
            id:0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }


      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }

      switchOnAll() {
          for(let appareil of this.appareils){
              appareil.status = 'allumé' ;
          }
      }
      
      switchOffAll() {
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
    }

    switchOnOne(i: number){
        this.appareils[i].status = 'allumé' ;
    }

    switchOffOne(i:number){
        this.appareils[i].status = 'éteint';
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil
        
    }
}