import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.userData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rePasword: ['', [Validators.required]],
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,}(?: [a-zA-Z]+){0,3}')]],
      phone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(10)]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['Male', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.userData.get('fullname')?.valid && this.userData.get('email')?.valid && this.userData.get('password')?.valid && this.userData.get('phone')?.valid && this.userData.get('address')?.valid && this.userData.get('rePasword')?.valid && this.dateErr == '') {
      let upUser: any = {
        account: this.userData.get('email')?.value,
        password: this.userData.get('password')?.value,
        name: this.userData.get('fullname')?.value,
        birth: this.userData.get('birthday')?.value,
        gender: this.userData.get('gender')?.value,
        mail: this.userData.get('email')?.value,
        phone: this.userData.get('phone')?.value,
        address: this.userData.get('address')?.value
      }

      this.http.post('http://localhost:8080/create', upUser).subscribe((resp) => {
          if (resp == "ok") {
            Swal.fire("Create an account success!", "", "success");
            this.router.navigate(['/login']);
          }
          else {
            Swal.fire("The email " + this.userData.get('email')?.value + " is already existed!", "", "error");
          }
        })

      // this.router.navigate(['/login']);
      }
  }

    dateErr: string = '';
  checkDate(date: string) {
    if (date == '') {
      this.dateErr = 'Birthday is require!';
      return false;
    }
    var regex = /^(1[89]|[2-9][0-9])\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    var birthday = new Date(date); // Khởi tạo một đối tượng
    var ageDiffMs = Date.now() - birthday.getTime(); // Tính khoảng thời gian giữa ngày hiện tại và ngày sinh
    var ageDate = new Date(ageDiffMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    // Tính toán số tuổi bằng cách lấy hiệu giữa năm hiện tại và năm 1970 (năm đầu tiên được hỗ trợ bởi hàm getUTCFullYear() của đối tượng Date).
    if (age < 18) {
      this.dateErr = 'You must be over 18 years old!';
      return false;
    } else {
      this.dateErr = '';
      return true;
    }
  }
}
