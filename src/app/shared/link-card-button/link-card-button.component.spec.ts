/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LinkCardButtonComponent } from './link-card-button.component';

describe('Component: LinkCardButton', () => {
  it('should create an instance', () => {
    let component = new LinkCardButtonComponent();
    expect(component).toBeTruthy();
  });
});
