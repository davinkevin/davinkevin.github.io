import { Component, OnInit} from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import { Theme, ThemeService } from './shared';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives : [ MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_ICON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES ],
  providers : [ MdIconRegistry, ThemeService ]
})
export class AppComponent implements OnInit {
  name = 'DAVIN Kevin';
  themes: Array<Theme>;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): any {
    this.themes = this.themeService.findAll();
  }

}
