import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-cart',
  templateUrl: './home-cart.component.html',
  styleUrls: ['./home-cart.component.css']
})
export class HomeCartComponent {
  @Input() price = 0;
  @Input() images?: string = "";
  @Input() detail?: string = "";
}
