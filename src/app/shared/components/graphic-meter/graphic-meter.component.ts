import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'shared-graphic-meter',
  standalone: false,
  templateUrl: './graphic-meter.component.html',
  styleUrls:['./graphic-meter.component.scss']
})

export class GraphicMeterComponent  {
  @Input() progress: number = 0;
  @Input() text: string = "";
}
