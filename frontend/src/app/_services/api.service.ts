import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { }

  login(credentials: Credential): Observable<Token> {
    return this.httpClient.post<Token>(`${this.API_URL}/login_check`, credentials);
  }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.API_URL}/characters`);
  }

  createCharacter(character: Character) {
    return this.httpClient.post<Character>(`${this.API_URL}/characters`, character);
  }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.API_URL}/characters/${id}`);
  }

  updateCharacter(id: number, character: Character) {
    return this.httpClient.put<Character>(`${this.API_URL}/characters/${id}`, character);
  }

  deleteCharacter(id: number): Observable<Character> {
    return this.httpClient.delete<Character>(`${this.API_URL}/characters/${id}`);
  }
}
