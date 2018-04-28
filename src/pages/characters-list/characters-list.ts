import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Character } from '../../models/character';
import { Characters } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-characters-list',
  templateUrl: 'characters-list.html'
})
export class CharactersListPage {
  currentCharacters: Character[];

  constructor(public navCtrl: NavController, public characters: Characters) {
    this.characters.getAllCharacters().subscribe(
      characters => { this.currentCharacters = characters }
    );
  }

  /**
   * The view loaded, let's query our characters for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openCharacter(character: Character) {
    this.navCtrl.push('CharacterDetailPage', {
      character: character
    });
  }
}
