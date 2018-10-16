import { TestBed, inject } from '@angular/core/testing';

import { MamutNg6LibService } from './mamut-ng6-lib.service';

describe('MamutNg6LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MamutNg6LibService]
    });
  });

  it('should be created', inject([MamutNg6LibService], (service: MamutNg6LibService) => {
    expect(service).toBeTruthy();
  }));
});
