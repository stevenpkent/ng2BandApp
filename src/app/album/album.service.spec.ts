/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AlbumService } from './album.service';

describe('Album Service', () => {
  beforeEachProviders(() => [AlbumService]);

  it('should ...',
      inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
