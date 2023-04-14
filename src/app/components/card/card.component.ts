import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() img!:string;
  @Input() cardTitle!:string;
  @Input() cardDesc!:string;
  @Input() cardCategories!:string;
  @Input() cardPlatform!:string;

}
