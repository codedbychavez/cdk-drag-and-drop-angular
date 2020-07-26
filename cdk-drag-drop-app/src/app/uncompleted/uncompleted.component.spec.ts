import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncompletedComponent } from './uncompleted.component';

describe('UncompletedComponent', () => {
  let component: UncompletedComponent;
  let fixture: ComponentFixture<UncompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
