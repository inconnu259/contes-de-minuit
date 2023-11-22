import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token);
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    console.log('token : ', token);
    console.log('isLogged : ', !! token);
    return !! token;
  }

  clearToken(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  clearTokenExpired(): void{
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }
}
