/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BandService } from './band.service';

describe('Band Service', () => {
  beforeEachProviders(() => [BandService]);

  it('should ...',
      inject([BandService], (service: BandService) => {
    expect(service).toBeTruthy();
  }));
});
