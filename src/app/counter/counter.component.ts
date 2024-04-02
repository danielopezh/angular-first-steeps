import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter=10;
  }
}
