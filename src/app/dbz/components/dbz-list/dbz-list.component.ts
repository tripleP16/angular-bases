import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {
  @Input() characterList: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();


  deleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id);
  }

}
