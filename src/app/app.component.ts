import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CounterComponent, HeroComponent, ListComponent]
})
export class AppComponent {
  public title:string = 's4';

}
