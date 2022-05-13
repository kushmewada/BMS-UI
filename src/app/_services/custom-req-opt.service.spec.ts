import { TestBed } from '@angular/core/testing';

import { CustomReqOptService } from './custom-req-opt.service';

describe('CustomReqOptService', () => {
  let service: CustomReqOptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomReqOptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
