import { Component } from '@angular/core';

@Component({
  selector: 'app-select-colors',
  templateUrl: './select-colors.component.html',
  styleUrls: ['./select-colors.component.css']
})
export class SelectColorsComponent {
  color = "#0070f3";
  selectedColor: string = '';

}
