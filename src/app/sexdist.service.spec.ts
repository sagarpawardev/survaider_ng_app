import { TestBed, inject } from '@angular/core/testing';

import { SexdistService } from './sexdist.service';

describe('SexdistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SexdistService]
    });
  });

  it('should be created', inject([SexdistService], (service: SexdistService) => {
    expect(service).toBeTruthy();
  }));
});
