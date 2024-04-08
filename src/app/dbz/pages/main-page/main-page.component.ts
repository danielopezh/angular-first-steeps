import { Component } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";
import { AddCharacterComponent } from "../../components/add-character/add-character.component";
import { Character } from '../../interfaces/Character';
import { DbzService } from '../../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    imports: [ListComponent, AddCharacterComponent]
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {
  }

  get characters() : Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }
  onNewCharacter(caharacter: Character): void {
    this.dbzService.addCharacter(caharacter);
  }
}
