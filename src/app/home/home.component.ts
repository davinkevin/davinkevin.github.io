import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon/icon';
import {Experience} from "../shared/experience/model/experience";
import {ExperienceService} from "../shared/experience/experience.service";
import {LinkCardButtonComponent} from "../shared";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives : [
    MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES,
    LinkCardButtonComponent
  ],
  providers : [ ExperienceService ]
})
export class HomeComponent implements OnInit {

  experiences: Array<Experience>;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experiences = this.experienceService.findAllRecent();
  }

}

export const HomeRoute: Route = { path: '', component: HomeComponent };
