import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Credential } from '../../models/credential.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
import { TokenService } from '../../_services/token.service';
import { Token } from '../../models/token.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage = '';
  roles: string[] = [];
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private apiService: ApiService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLogged();
  }

  submit() {
    if (this.form.valid) {
      this.apiService.login(this.form.value).subscribe(
        (data) => {
          console.log(data.token);
          this.tokenService.saveToken(data.token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          console.error(err);
        }
      );
    }
    this.clear();
  }

  reloadPage(): void {
    window.location.reload();
  }

  clear() {
    this.hidePassword = true;
  }
}
