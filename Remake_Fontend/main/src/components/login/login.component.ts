import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  private apiUrl = '';
  userLogin: FormGroup;
  token: string = '';
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


  checkLogin(){
    var data = {
      username: this.userLogin.get('email')?.value,
      password: this.userLogin.get('password')?.value
    }
    this.http.post("http://localhost:8080/login", data).subscribe((resp: any) => {
      this.token = resp;
      if(this.token === ''){
        Swal.fire("Email or password is invalid!", "", "error");
      }
      else {
        // Swal.fire("Login success!", "", "success");
        localStorage.setItem('token', this.token);
        this.router.navigate(['/home']);
      }
    })
  }
}
