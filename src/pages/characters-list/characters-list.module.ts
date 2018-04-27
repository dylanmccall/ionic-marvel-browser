import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CharactersListPage } from './characters-list';

@NgModule({
  declarations: [
    CharactersListPage,
  ],
  imports: [
    IonicPageModule.forChild(CharactersListPage),
    TranslateModule.forChild()
  ],
  exports: [
    CharactersListPage
  ]
})
export class CharactersListPageModule { }
