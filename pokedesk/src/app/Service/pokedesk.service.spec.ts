import { TestBed } from '@angular/core/testing';

import { PokedeskService } from './pokedesk.service';

describe('PokedeskService', () => {
  let service: PokedeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
