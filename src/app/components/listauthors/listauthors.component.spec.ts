import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListauthorsComponent } from './listauthors.component';

describe('ListauthorsComponent', () => {
  let component: ListauthorsComponent;
  let fixture: ComponentFixture<ListauthorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListauthorsComponent]
    });
    fixture = TestBed.createComponent(ListauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
