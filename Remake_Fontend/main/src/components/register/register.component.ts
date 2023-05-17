import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.userData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rePasword: ['', [Validators.required]],
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,}(?: [a-zA-Z]+){0,3}')]],
      phone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(10)]],
      address: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.userData.get('fullname')?.valid && this.userData.get('email')?.valid && this.userData.get('password')?.valid && this.userData.get('phone')?.valid && this.userData.get('address')?.valid && this.userData.get('rePassword')?.valid){
      this.router.navigate(['/login']);
    }
  }
}
