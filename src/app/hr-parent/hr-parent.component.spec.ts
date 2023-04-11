import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrParentComponent } from './hr-parent.component';

describe('HrParentComponent', () => {
  let component: HrParentComponent;
  let fixture: ComponentFixture<HrParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
