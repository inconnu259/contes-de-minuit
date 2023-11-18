import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<object[]> {
    return this.httpClient.get<object[]>(`${this.API_URL}/characters`);
  }

  createCharacter(character: Object) {
    return this.httpClient.post(`${this.API_URL}/characters`, character);
  }
}
