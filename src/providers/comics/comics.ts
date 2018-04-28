import { Injectable } from '@angular/core';

import format from 'string-format';

import { Api } from '../api/api';
import { Comic } from '../../models/comic';

@Injectable()
export class Comics {
  constructor(public api: Api) { }

  getAllComics() {
    return this.api.getList<Comic>('comics');
  }

  getComicsForCharacterId(characterId: Number) {
    return this.api.getList<Comic>(format('characters/{characterId}/comics', {characterId}));
  }
}