import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerParentComponent } from './interviewer-parent.component';

describe('InterviewerParentComponent', () => {
  let component: InterviewerParentComponent;
  let fixture: ComponentFixture<InterviewerParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewerParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
