/**
 * Created by kevin on 19/07/2016.
 */
import {Domain} from "./model/domain.enum";
import {Experience} from "./model/experience";
import {Context} from "./model/context";

const angularToulouse: Context = { name : 'AngularToulouse', url : 'images/extras/angularToulouse/logo.jpg' };
const airbusDsGeo: Context = { name : 'Airbus DS Geo', url : 'images/pro/airbus/logo.png' };

export const experiences: Array<Experience> = [
  {
    type: Domain.EXTRA,
    startDate: new Date('2016-05-03'),
    endDate: new Date('2016-05-03'),
    title: 'Introduction to Angular2',
    context: angularToulouse,
    image: 'images/extras/angularToulouse/1-IntroductionAAngular2/cover.jpg',
    description: 'Presentation of all the new stuff coming in Angular2, with the point of view of an AngularJS developer',
    link : { url: 'https://www.youtube.com/watch?v=fBXJrAa-YWE' }
  }, {
    type: Domain.PRO,
    startDate: new Date('2015-10-01'),
    title: 'OneAtlas',
    context: airbusDsGeo,
    image: 'images/pro/airbus/one-atlas/cover.jpg',
    description: 'One Atlas is a virtual globe that will completely transform the way satellite imagery is accessed.',
    link : { url : 'http://www.intelligence-airbusds.com/fr/7193-one-atlas'}
  }
];

