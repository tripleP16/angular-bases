import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzServiceTsService {

  constructor() { }


  public characters: Character[] = [
    {id: uuid(), name: 'Krillin', power: 1000},
    {id: uuid(), name: 'Goku', power: 9500},
    {id: uuid(), name: 'Vegta', power: 7000},
    {id: uuid(), name: 'Yamcha', power: 1}
  ];


  addCharacter(character: Character): void {
   const newCharacter: Character = {
    id: uuid(), ...character
    }
   this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((element) => element.id !== id);
  }
}
