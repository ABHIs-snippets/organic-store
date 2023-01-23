import { Component, Input } from '@angular/core';

@Component({
  selector: 'secondry-button',
  templateUrl: './secondry-button.component.html',
  styleUrls: ['./secondry-button.component.scss'],
})
export class SecondryButtonComponent {
  @Input('primary') primary = true;
}
