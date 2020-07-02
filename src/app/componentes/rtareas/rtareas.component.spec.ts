import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtareasComponent } from './rtareas.component';

describe('RtareasComponent', () => {
  let component: RtareasComponent;
  let fixture: ComponentFixture<RtareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
