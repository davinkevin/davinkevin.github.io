import { Injectable } from '@angular/core';
import { Experience, Domain } from "./model";
import { experiences } from "./experiences.data";

@Injectable()
export class ExperienceService {

  constructor() {}

  private findAll(): Array<Experience> {
    return experiences;
  }

  findAllOfType(EXTRA: Domain): Array<Experience> {
    return this
      .findAll()
      .filter(e => e.type === EXTRA);
  }

  findAllRecent(): Array<Experience> {
    let now = new Date();
    let sixMonthBefore = new Date(new Date().setMonth(now.getMonth()-6));
    return this
      .findAll()
      .filter(e => e.endDate === undefined || this.isBetween(e.startDate, sixMonthBefore, now) || this.isBetween(e.endDate, sixMonthBefore, now));
  }

  private isBetween(dateToCheck: Date, start: Date, end: Date): boolean {
    return start < dateToCheck && dateToCheck < end;
  }
}
