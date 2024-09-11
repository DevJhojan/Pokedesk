import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicMeterComponent } from './graphic-meter.component';

describe('GraphicMeterComponent', () => {
  let component: GraphicMeterComponent;
  let fixture: ComponentFixture<GraphicMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicMeterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
