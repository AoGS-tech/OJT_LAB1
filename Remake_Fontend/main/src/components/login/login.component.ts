import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jsonwebtoken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  private apiUrl = '';
  userLogin: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  test = {
    email: "ao@gmail.com",
    password: "123"
  }

  onLogin() {

  }

  saveToken(token: string){
    localStorage.setItem('jwt-token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken'); // Truy xuất JWT từ Local Storage
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token ? true : false; // Kiểm tra xem JWT có tồn tại không
  }
}
