import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CharacterDetailPage } from './character-detail';

@NgModule({
  declarations: [
    CharacterDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    CharacterDetailPage
  ]
})
export class CharacterDetailPageModule { }
