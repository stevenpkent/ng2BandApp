/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AlbumListComponent } from './album-list.component';

describe('Component: AlbumList', () => {
  it('should create an instance', () => {
    let component = new AlbumListComponent();
    expect(component).toBeTruthy();
  });
});
