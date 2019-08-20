import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListtComponent } from './app-listt.component';

describe('AppListtComponent', () => {
  let component: AppListtComponent;
  let fixture: ComponentFixture<AppListtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
