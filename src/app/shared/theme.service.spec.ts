/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('Theme Service', () => {
  beforeEachProviders(() => [ThemeService]);

  it('should ...',
      inject([ThemeService], (service: ThemeService) => {
    expect(service).toBeTruthy();
  }));
});
