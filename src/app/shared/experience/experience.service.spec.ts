/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ExperienceService } from './experience.service';

describe('Experience Service', () => {
  beforeEachProviders(() => [ExperienceService]);

  it('should ...',
      inject([ExperienceService], (service: ExperienceService) => {
    expect(service).toBeTruthy();
  }));

});
