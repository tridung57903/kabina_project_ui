import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsnavbarComponent } from './usnavbar.component';

describe('UsnavbarComponent', () => {
  let component: UsnavbarComponent;
  let fixture: ComponentFixture<UsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
