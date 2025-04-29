import { TestBed } from '@angular/core/testing';

import { DepoimentoService } from './depoimentos.service';

describe('DepoimentosService', () => {
  let service: DepoimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepoimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
