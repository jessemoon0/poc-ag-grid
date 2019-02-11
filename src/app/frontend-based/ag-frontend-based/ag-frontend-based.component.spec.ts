import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFrontendBasedComponent } from './ag-frontend-based.component';

describe('AgFrontendBasedComponent', () => {
  let component: AgFrontendBasedComponent;
  let fixture: ComponentFixture<AgFrontendBasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgFrontendBasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgFrontendBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
