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
  jsonData: Preguntas[] | undefined;
  respuestas: string[] = [];
  disableCheck: boolean = false;
  preguntaActual: Preguntas | undefined;
  ngOnInit(): void {
    this.http.get<Preguntas[]>('assets/preguntas.json').subscribe(
      (datos) => {
        this.jsonData = datos;
        this.renderPregunta();
      },
      (error) => {
        console.log('Error al cargar el archivo JSON', error);
      }
    );
  }
  private getRandomInt(lenght: any) {
    return Math.floor(Math.floor(Math.random() * lenght));
  }

  buttonEnable(): boolean {
    return true;
  }

  onCheckboxChange() {
    this.disableCheck = true;
  }
  renderPregunta() {
    const numeroPregunta = this.getRandomInt(this.jsonData?.length);
    if (this.jsonData != undefined) {
      this.preguntaActual = this.jsonData[numeroPregunta];
      this.jsonData.splice(numeroPregunta, 1);
      this.disableCheck = false;
    }
    console.log(this.jsonData, this.preguntaActual);
  }
}
