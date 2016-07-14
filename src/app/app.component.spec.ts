/* tslint:disable:no-unused-variable */

import {beforeEach, beforeEachProviders, async, inject} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: TestMaterial', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.name).toEqual('DAVIN Kevin');
  }));
});
