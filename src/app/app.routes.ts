import { provideRouter, RouterConfig } from '@angular/router';

import { ExtrasRoute } from './extras';
import { HomeRoute } from './home';

const routes: RouterConfig = [
  HomeRoute,
  ExtrasRoute
];


export const appRouterProviders = [
  provideRouter(routes)
];
