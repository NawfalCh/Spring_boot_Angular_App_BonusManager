import { TestBed } from '@angular/core/testing';

import { StorageInfosService } from './storage-infos.service';

describe('StorageInfosService', () => {
  let service: StorageInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
