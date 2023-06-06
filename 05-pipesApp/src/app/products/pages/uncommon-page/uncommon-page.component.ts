import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name:string='Borja'
  public gender: 'male'|'female'='male'
  public invitationMap={
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient():void{
    this.name='Melisa';
    this.gender='female';
  }

  //i18Plural
  public clients:string[]=['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando'
  }

  public deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person={
    name: 'Borja',
    age:27,
    address:'Madrid, España'
  }

  //Async Pipe
  public myObservableTimer=interval(2000).pipe(
    tap(value=>console.log('tap: ',value))
  );

  public promiseValue=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
    }, 3500)
  })
}
