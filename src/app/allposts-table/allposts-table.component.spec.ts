import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpostsTableComponent } from './allposts-table.component';

describe('AllpostsTableComponent', () => {
  let component: AllpostsTableComponent;
  let fixture: ComponentFixture<AllpostsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllpostsTableComponent]
    });
    fixture = TestBed.createComponent(AllpostsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
