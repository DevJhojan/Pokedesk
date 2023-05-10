import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPomemonComponent } from './list-pomemon.component';

describe('ListPomemonComponent', () => {
  let component: ListPomemonComponent;
  let fixture: ComponentFixture<ListPomemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPomemonComponent]
    });
    fixture = TestBed.createComponent(ListPomemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
