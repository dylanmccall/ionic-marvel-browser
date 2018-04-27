import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComicsListForCharacterPage } from './comics-list-for-character';

@NgModule({
  declarations: [
    ComicsListForCharacterPage,
  ],
  imports: [
    IonicPageModule.forChild(ComicsListForCharacterPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComicsListForCharacterPage
  ]
})
export class ComicsListForCharacterPageModule { }
