import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  message: string ;
  price: number ;
  items: string[] = ['one', 'two', ' three'] ;
  constructor() {
    this.message = 'Item Available' ;
    this.price = 5678;
   }

  greetUser(): string {
    return 'hello user';
  }
  change(): void {
    this.price = null;
    this.message = 'item unavailable' ;
  }

}
