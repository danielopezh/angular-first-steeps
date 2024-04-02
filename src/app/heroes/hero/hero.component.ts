import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${this.age}`;
  }

  changeHero(): void {
    console.log('Cambiar nombre presionado!!!!');
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 22;
  }

}
