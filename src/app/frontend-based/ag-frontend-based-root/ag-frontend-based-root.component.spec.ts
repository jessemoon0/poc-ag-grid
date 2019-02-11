import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFrontendBasedRootComponent } from './ag-frontend-based-root.component';

describe('AgFrontendBasedRootComponent', () => {
  let component: AgFrontendBasedRootComponent;
  let fixture: ComponentFixture<AgFrontendBasedRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgFrontendBasedRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgFrontendBasedRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
