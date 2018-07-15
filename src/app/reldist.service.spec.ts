import { TestBed, inject } from '@angular/core/testing';

import { ReldistService } from './reldist.service';

describe('ReldistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReldistService]
    });
  });

  it('should be created', inject([ReldistService], (service: ReldistService) => {
    expect(service).toBeTruthy();
  }));
});
