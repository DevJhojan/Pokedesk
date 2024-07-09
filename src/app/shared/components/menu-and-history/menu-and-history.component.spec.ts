import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAndHistoryComponent } from './menu-and-history.component';

describe('MenuAndHistoryComponent', () => {
  let component: MenuAndHistoryComponent;
  let fixture: ComponentFixture<MenuAndHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAndHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuAndHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
