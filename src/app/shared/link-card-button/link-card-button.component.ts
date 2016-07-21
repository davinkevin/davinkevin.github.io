import {Component, OnInit, Input} from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button/button";
import { MD_ICON_DIRECTIVES } from "@angular2-material/icon/icon";
import {Link} from "../experience/model/experience";

@Component({
  moduleId: module.id,
  selector: 'link-card-button',
  templateUrl: 'link-card-button.component.html',
  styleUrls: ['link-card-button.component.css'],
  directives : [ MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES ]
})
export class LinkCardButtonComponent implements OnInit {

  @Input() link: Link;

  icon: string;
  text: string;

  constructor() {}

  ngOnInit() {
    if (/youtube/.test(this.link.url)) {
      this.text = this.link.text || 'See on Youtube';
      this.icon = 'fa-youtube';
      return;
    }

    this.text = this.link.text || 'Access Website';
    this.icon = 'fa-link';
  }

}
