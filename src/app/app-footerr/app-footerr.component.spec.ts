import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterrComponent } from './app-footerr.component';

describe('AppFooterrComponent', () => {
  let component: AppFooterrComponent;
  let fixture: ComponentFixture<AppFooterrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFooterrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
