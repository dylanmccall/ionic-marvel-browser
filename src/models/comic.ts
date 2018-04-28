/**
 * Model for a comic from the Marvel API.
 */
export class Comic {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}
  
export interface Comic {
  [prop: string]: any;
}
