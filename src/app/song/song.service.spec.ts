/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SongService } from './song.service';

describe('Song Service', () => {
  beforeEachProviders(() => [SongService]);

  it('should ...',
      inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));
});
