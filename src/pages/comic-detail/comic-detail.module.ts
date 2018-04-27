import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComicDetailPage } from './comic-detail';

@NgModule({
  declarations: [
    ComicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComicDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComicDetailPage
  ]
})
export class ComicDetailPageModule { }
