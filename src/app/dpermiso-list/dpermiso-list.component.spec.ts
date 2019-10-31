import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpermisoListComponent } from './dpermiso-list.component';

describe('DpermisoListComponent', () => {
  let component: DpermisoListComponent;
  let fixture: ComponentFixture<DpermisoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpermisoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpermisoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
