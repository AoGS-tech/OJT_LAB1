import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
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

  onLogin(){
    // alert(this.userLogin.get('email')?.value + "/n" + this.userLogin.get('email')?.value);
    if(this.userLogin.get('email')?.value == this.test.email && this.userLogin.get('password')?.value == this.test.password){
      this.router.navigate(['/home']);
    }
    else {

    }
  }
}
