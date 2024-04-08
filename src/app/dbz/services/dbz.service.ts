import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }

  ];

  addCharacter(character: Character) {
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(character);
  }

/*   onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  } */

  onDeleteCharacterById( idc: string ) {
    this.characters = this.characters.filter(({id}) => id !== idc);
  }

}
