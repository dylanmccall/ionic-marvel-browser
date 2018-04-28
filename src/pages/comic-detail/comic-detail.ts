import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comics } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-comic-detail',
  templateUrl: 'comic-detail.html'
})
export class ComicDetailPage {
  comic: any;

  constructor(public navCtrl: NavController, navParams: NavParams, comics: Comics) {
    this.comic = navParams.get('comic');
  }
}
