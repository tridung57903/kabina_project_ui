import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsfooterComponent } from './usfooter.component';

describe('UsfooterComponent', () => {
  let component: UsfooterComponent;
  let fixture: ComponentFixture<UsfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
