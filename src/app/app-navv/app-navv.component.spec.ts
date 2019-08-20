import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavvComponent } from './app-navv.component';

describe('AppNavvComponent', () => {
  let component: AppNavvComponent;
  let fixture: ComponentFixture<AppNavvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
