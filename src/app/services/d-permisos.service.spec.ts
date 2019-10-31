import { TestBed } from '@angular/core/testing';

import { DPermisosService } from './d-permisos.service';

describe('DPermisosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DPermisosService = TestBed.get(DPermisosService);
    expect(service).toBeTruthy();
  });
});
