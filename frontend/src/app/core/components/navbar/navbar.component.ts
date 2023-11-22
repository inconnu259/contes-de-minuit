import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TokenService } from '../../../_services/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLogged();
  }

  logout(): void {
    this.tokenService.clearToken();
    this.isLoggedIn = this.tokenService.isLogged();
  }
}
