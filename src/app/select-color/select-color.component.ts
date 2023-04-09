import { Component } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent {
  public color: string = '#ff0000';
  public selectedColor: string = '';
  public show: boolean = false;
  handleChangeComplete($event: ColorEvent) {

    this.selectedColor = $event.color.hex;
  }
  handleFocus($event: any) {
    // if ($event.target.offsetHeight < $event.target.scrollHeight ||
    //   $event.target.offsetWidth < $event.target.scrollWidth) {
    //   // your element have overflow
    //   alert('div is overflown of elements');
    // } else {
    //   // your element doesn't have overflow
    //   alert('div is not overflown of elements');
    // }
    this.show = true;
  }
  handleBlur() {
    this.show = false;
  }
}
