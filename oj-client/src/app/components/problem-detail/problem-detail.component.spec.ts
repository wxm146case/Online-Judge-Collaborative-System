import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemDetailComponent } from './problem-detail.component';

describe('ProblemDetailComponent', () => {
  let component: ProblemDetailComponent;
  let fixture: ComponentFixture<ProblemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
