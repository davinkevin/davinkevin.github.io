import { Injectable } from '@angular/core';

export declare interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

@Injectable()
export class SocialService {

  constructor() {}

  findAll(): Array<SocialLink> {
    return [
      { 'name' : 'GitHub', 'icon' : 'fa-github', 'link' : 'https://github.com/davinkevin' },
      { 'name' : 'Twitter', 'icon' : 'fa-twitter', 'link' : 'https://twitter.com/davinkevin' },
      { 'name' : 'LinkedIn', 'icon' : 'fa-linkedin', 'link' : 'publichttps://fr.linkedin.com/in/kevin-davin-a8668a11' }
    ]
  }

}
