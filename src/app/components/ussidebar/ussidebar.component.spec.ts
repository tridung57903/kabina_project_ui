import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UssidebarComponent } from './ussidebar.component';

describe('UssidebarComponent', () => {
  let component: UssidebarComponent;
  let fixture: ComponentFixture<UssidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UssidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UssidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
