import { Injectable } from '@angular/core';

export declare interface Theme {
  name: string;
  icon?: string;
}


@Injectable()
export class ThemeService {

  constructor() {}

  findAll(): Array<Theme> {
    return [
      { name : 'Professionnel', icon : 'business' },
      { name : 'Extra', icon : 'star' },
      { name : 'Etudes', icon : 'school' }
    ];
  }
}
