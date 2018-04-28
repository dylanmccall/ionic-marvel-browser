import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Character } from '../../models/character';

@Injectable()
export class Characters {
  constructor(public api: Api) { }

  getAllCharacters() {
    return this.api.getList<Character>('characters');
  }
}
