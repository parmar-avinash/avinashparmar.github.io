import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadewithangularComponent } from './madewithangular.component';

describe('MadewithangularComponent', () => {
  let component: MadewithangularComponent;
  let fixture: ComponentFixture<MadewithangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadewithangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadewithangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
