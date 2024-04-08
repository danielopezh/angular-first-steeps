import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDeleteCharacterEmiter: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index:number): void {
    console.log(index);
    this.onDeleteCharacterEmiter.emit(index);
  }

  @Output()
  public onDeleteCharacterByIdEmiter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?:string): void {
    console.log(id);
    if(!id) return;
    this.onDeleteCharacterByIdEmiter.emit(id);
  }

 }
