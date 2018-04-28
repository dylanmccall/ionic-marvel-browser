import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comic } from '../../models/comic';
import { Comics } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-comics-list-for-character',
  templateUrl: 'comics-list-for-character.html'
})
export class ComicsListForCharacterPage {
  character: any;
  currentComics: Comic[];

  constructor(public navCtrl: NavController, navParams: NavParams, public comics: Comics) {
    this.character = navParams.get('character');
    this.comics.getComicsForCharacterId(this.character.id).subscribe(
      comics => { this.currentComics = comics }
    );
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openComic(comic: Comic) {
    this.navCtrl.push('ComicDetailPage', {
      comic: comic
    });
  }
}
