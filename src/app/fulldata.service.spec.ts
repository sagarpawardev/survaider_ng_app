import { TestBed, inject } from '@angular/core/testing';

import { FulldataService } from './fulldata.service';

describe('FulldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FulldataService]
    });
  });

  it('should be created', inject([FulldataService], (service: FulldataService) => {
    expect(service).toBeTruthy();
  }));
});
