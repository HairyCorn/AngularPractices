import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
