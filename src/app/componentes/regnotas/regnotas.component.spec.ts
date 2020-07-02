import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnotasComponent } from './regnotas.component';

describe('RegnotasComponent', () => {
  let component: RegnotasComponent;
  let fixture: ComponentFixture<RegnotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegnotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
