import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'shared-graphic-meter',
  standalone: false,
  templateUrl: './graphic-meter.component.html',
  styleUrls: ['./graphic-meter.component.scss'],
})
export class GraphicMeterComponent implements OnChanges {
  @Input() progress: number = 0;
  maxWidth: number = 0;
  maxWidthValue: number = 0;
  @Input() text: string = '';
  adjustedProgress: number = 0;
  left: number = 0;
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.maxWidth = Math.ceil(this.progress / 100) * 100;
    this.maxWidthValue = this.calculateMaxWidth();
    this.left = this.calcultateLeft();
    this.adjustedProgress = (this.progress / this.maxWidth) * 100;
  }

  calcultateLeft(): number{
    if(this.progress < 49) return 40;
    if(this.progress < 99) return  25;
    if(this.progress < 199) return -40;
    if(this.progress < 299) return -98;
    else return 0;
  }
  calculateMaxWidth():number{
    if(this.progress < 99) return 100;
    else if(this.progress < 199) return 200;
    else if(this.progress < 299) return 300;
    else return 100;
  }
}
