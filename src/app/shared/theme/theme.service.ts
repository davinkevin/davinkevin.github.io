import { Injectable } from '@angular/core';

export declare interface Theme {
  name: string;
  icon: string;
  link: string;
}

@Injectable()
export class ThemeService {

  constructor() {}

  findAll(): Array<Theme> {
    return [
      { name : 'Professional', icon : 'business', link : 'pros' },
      { name : 'Studies', icon : 'school', link : 'studies' },
      { name : 'Extra', icon : 'star', link : 'extras' }
    ];
  }
}
