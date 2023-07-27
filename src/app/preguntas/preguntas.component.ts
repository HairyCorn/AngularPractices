import { Component } from '@angular/core';
import { ChatGptService } from '../chat-gpt-service.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent {
  questions: string[] = [];
  topic: string | null = null;

  constructor(private chatGptService: ChatGptService) {}

  onSubmit() {}

  onTopicChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value) {
      this.topic = inputElement.value;
    } else {
      this.topic = null;
    }
  }
}
