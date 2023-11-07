import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepByStepGuideComponent } from './step-by-step-guide.component';

describe('StepByStepGuideComponent', () => {
  let component: StepByStepGuideComponent;
  let fixture: ComponentFixture<StepByStepGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepByStepGuideComponent]
    });
    fixture = TestBed.createComponent(StepByStepGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
