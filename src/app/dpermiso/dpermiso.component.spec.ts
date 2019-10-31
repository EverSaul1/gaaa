import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpermisoComponent } from './dpermiso.component';

describe('DpermisoComponent', () => {
  let component: DpermisoComponent;
  let fixture: ComponentFixture<DpermisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpermisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
