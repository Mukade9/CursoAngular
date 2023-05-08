import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="Reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
`

})
export class CounterComponent{
  counter: number=10;

  increaseBy(a:number):void{
    this.counter +=a;
  }

  Reset(){
    this.counter=10;
  }
}
