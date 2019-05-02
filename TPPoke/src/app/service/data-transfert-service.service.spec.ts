import { TestBed } from '@angular/core/testing';

import { DataTransfertServiceService } from './data-transfert-service.service';

describe('DataTransfertServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTransfertServiceService = TestBed.get(DataTransfertServiceService);
    expect(service).toBeTruthy();
  });
});
