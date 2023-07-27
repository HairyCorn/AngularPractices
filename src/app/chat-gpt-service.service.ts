import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ChatGptService {
  private apiUrl = "URL_DEL_ENDPOINT_DE_OPENAI";
  private apiKey = "TU_CLAVE_DE_API";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    }),
  };

  constructor(private http: HttpClient) { }

  getQuestions(topic: string): Observable<string[]> {
    return this.http.post<any>(this.apiUrl, { topic }, this.httpOptions).pipe(
      map((response) => {
        return response.questions;
      })
    );
  }
}
