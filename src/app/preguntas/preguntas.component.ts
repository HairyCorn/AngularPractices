import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Preguntas } from '../model/preguntas.model';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  constructor(private http: HttpClient) {}
  question: string = 'Hola mundo';
  topic: string | null = null;
  jsonData: Preguntas | undefined;
  respuestas: string[] = [];
  disableCheck: boolean = false;

  ngOnInit(): void {
    this.http.get<Preguntas[]>('assets/preguntas.json').subscribe(
      (datos) => {
        const numeroPregunta = this.getRandomInt(datos.length);
        this.jsonData = datos[numeroPregunta];
      },
      (error) => {
        console.log('Error al cargar el archivo JSON', error);
      }
    );
  }
  private getRandomInt(lenght: number) {
    return Math.floor(Math.floor(Math.random() * lenght));
  }

  buttonEnable(): boolean {
    return true;
  }

  onCheckboxChange() {
    this.disableCheck = true;
  }
}
