import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntervieweeComponent } from './add-interviewee.component';

describe('AddIntervieweeComponent', () => {
  let component: AddIntervieweeComponent;
  let fixture: ComponentFixture<AddIntervieweeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIntervieweeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIntervieweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
