import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedRootComponent } from './getting-started-root.component';

describe('GettingStartedRootComponent', () => {
  let component: GettingStartedRootComponent;
  let fixture: ComponentFixture<GettingStartedRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
