import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site-btn',
  templateUrl: './site-btn.component.html',
  styleUrls: ['./site-btn.component.css']
})
export class SiteBtnComponent {

  @Input() text: string = '';

}
