import {Domain} from "./domain.enum";
import {Context} from "./context";

export interface Link {
  url: string;
  text?: string;
}

export interface Experience {
  type: Domain;

  startDate: Date;
  endDate?: Date;

  location?: string;
  geoLocation?: Array<number>;

  title: string;
  context: Context;
  image : string;
  description: string;

  link?: Link;
}

