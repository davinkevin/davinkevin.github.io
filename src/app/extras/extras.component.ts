import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import {Experience, ExperienceService} from "../shared";
import {Domain} from "../shared";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {LinkCardButtonComponent} from "../shared";

@Component({
  moduleId: module.id,
  selector: 'app-extras',
  templateUrl: 'extras.component.html',
  styleUrls: ['extras.component.css'],
  directives : [
    MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES,
    LinkCardButtonComponent
  ],
  providers: [ ExperienceService ]
})
export class ExtrasComponent implements OnInit {

  experiences: Array<Experience>;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experiences = this.experienceService.findAllOfType(Domain.EXTRA);
  }

}

export const ExtrasRoute: Route = { path: 'extras', component: ExtrasComponent };
