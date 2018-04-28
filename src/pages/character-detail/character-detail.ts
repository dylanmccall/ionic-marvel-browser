import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Character } from '../../models/character';
import { Characters } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-character-detail',
  templateUrl: 'character-detail.html'
})
export class CharacterDetailPage {
  character: any;

  constructor(public navCtrl: NavController, navParams: NavParams, characters: Characters) {
    this.character = navParams.get('character');
  }

  /**
   * Navigate to the list of comics for this character.
   */
  openComicsForCharacter(character: Character) {
    this.navCtrl.push('ComicsListForCharacterPage', {
      character: character
    });
  }

}
