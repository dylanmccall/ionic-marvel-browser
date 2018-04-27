import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-comics-list-for-character',
  templateUrl: 'comics-list-for-character.html'
})
export class ComicsListForCharacterPage {
  character: any;
  currentItems: Item[];

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.character = navParams.get('character') || items.defaultItem;
    // this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ComicDetailPage', {
      item: item
    });
  }
}
