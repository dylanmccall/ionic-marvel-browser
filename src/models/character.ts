/**
 * Model for a comic book character from the Marvel API.
 */
export class Character {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Character {
  [prop: string]: any;
}
