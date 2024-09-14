import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'shared-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  @Input() img!: string;
  @Input() alt: string = ''

  public hasLoaded: boolean = false;
  ngOnInit():void {
		if(!this.img) new Error('url property is required');
	}

	onLoad():void{
		setTimeout(()=>{
			this.hasLoaded = true;
		}, 1000);
	}
}
