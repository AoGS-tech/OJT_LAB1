import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  user: Employee = {
    EmpID: 0,
    Fullname: '',
    Birthday: '',
    Gender: '',
    Email: '',
    Phone: '',
    Address: '',
    DepartmentID: 0,
    Block: 1,
    RoleID: 0
  };
  status: string = '';
  userData: FormGroup;
  fullname: FormControl = new FormControl('');
  bod: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  phone: FormControl = new FormControl('');
  address: FormControl = new FormControl('');
  department: FormControl = new FormControl('');
  block: FormControl = new FormControl('');
  role: FormControl = new FormControl('');

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    const params = this.router.getCurrentNavigation()?.extras.state?.['queryData'];
    if (params) {
      this.user = JSON.parse(params);
      this.fullname = new FormControl(this.user.Fullname);
      this.bod = new FormControl(this.user.Birthday);
      this.gender = new FormControl(this.user.Gender);
      this.email = new FormControl(this.user.Email);
      this.phone = new FormControl(this.user.Phone);
      this.address = new FormControl(this.user.Address);
      this.department = new FormControl(this.user.DepartmentID);
      this.block = new FormControl(this.user.Block);
      this.role = new FormControl(this.user.RoleID);
    }
    this.userData = this.fb.group({
    })
  }

  ngOnInit() {
  }

  clear(){
    this.fullname = new FormControl('');
    this.bod = new FormControl('');
    this.gender = new FormControl('');
    this.email = new FormControl('');
    this.phone = new FormControl('');
    this.address = new FormControl('');
    this.department = new FormControl(1);
    this.role = new FormControl(1);
    this.nameErr = '';
    this.dateErr = '';
    this.genderErr = '';
    this.emailErr = '';
    this.phoneErr = '';
    this.addressErr = '';
    this.departmentErr = '';
    this.roleErr = '';
  }
  updateUser() {
    let upUser: Employee = {
      EmpID: this.user.EmpID,
      Fullname: this.fullname.value,
      Birthday: this.bod.value,
      Gender: this.gender.value,
      Email: this.email.value,
      Phone: this.phone.value,
      Address: this.address.value,
      DepartmentID: this.department.value,
      Block: this.block.value,
      RoleID: this.role.value
    }
    console.log(upUser);
    if (this.checkFullname(this.fullname.value) && this.checkAddress(this.address.value) && this.checkDate(this.bod.value) && this.checkDepartment(this.department.value) && this.checkEmail(this.email.value) && this.checkPhone(this.phone.value) && this.checkRole(this.role.value) && this.checkGender(this.gender.value)) {
      alert("hihi");
      if (this.user.EmpID == 0) {
        this.http.post('http://localhost:8080/user/create', upUser).subscribe((resp) => {
          if (resp == "ok") {
            alert(resp);
            this.router.navigate(['/userManagement']);
          }
          else {
            alert(resp);
          }
        })
      }
      else {
        this.http.post('http://localhost:8080/user/update', upUser).subscribe((resp) => {
      if(resp == "ok"){
        alert(resp);
        this.router.navigate(['/userManagement']);
      }
      else {
        alert(resp);
      }
    })
      }
    }

  }

  phoneErr: string = '';
  checkPhone(phone: string) {
    if (phone == '') {
      this.phoneErr = "Number phone is require!";
      return false;
    }
    var regex = /^0\d{9,10}$/;
    this.phone.setValidators
    if (!regex.test(phone)) {
      // document.getElementById("txtPhoneMessage").innerHTML = "Invalid phone number Exam: 0976340695";
      this.phoneErr = "Invalid phone number Exam: 0976340695";
      return false;
    } else {
      // document.getElementById("txtPhoneMessage").innerHTML = "";
      this.phoneErr = '';
      return true;
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
    return true;
  }

  nameErr: string = '';
  checkFullname(val: string) {
    if (val.trim().length == 0) {
      this.nameErr = 'Fullname is required!';
      return false;
    }
    const regex = /^[^0-9!@#$%^&*(),.?":{}|<>]*$/;
    if (!regex.test(val)) {
      this.nameErr = 'Fullname does not include special character!';
    }
    else {
      var test = val.trim().split(' ');
      console.log(test);
      if (test.length < 2) {
        this.nameErr = 'Fullname have at least 2 words, example: David Beckham';
      }
      else {
        this.nameErr = '';
      }
    }
    return true;
  }

  genderErr: string = '';
  checkGender(val: string) {
    if (val == '') {
      this.genderErr == "Gender is require!";
      return false;
    }
    else {
      this.genderErr = '';
      return true;
    }
  }

  emailErr: string = '';
  checkEmail(email: string) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      this.emailErr = 'Invalid email format Exam:example@gmail.com'
      return false;
    } else {
      this.emailErr = '';
      return true;
    }
  }

  addressErr: string = '';
  checkAddress(address: string) {
    var regex = /^[a-zA-Z\s\d]+$/; // Gồm chuỗi, số và khoảng trắng
    if (!regex.test(address)) {
      // document.getElementById("txtAddressMessage").innerHTML = "Address must contain at least one alphabet character or number";
      this.addressErr = 'Address must contain at least one alphabet character or number';
      return false;
    } else {
      this.addressErr = '';
      return true;
    }
  }

  departmentErr: string = '';
  checkDepartment(val: number) {
    if (val == 0) {
      this.departmentErr = 'Department is required!';
      return false;
    }
    else {
      this.departmentErr = '';
      true;
    }
    return true;
  }

  roleErr: string = '';
  checkRole(val: number) {
    if (val == 0) {
      this.roleErr = 'Role is required!';
      return false;
    }
    else {
      this.roleErr = ''
      return true;
    }
  }
}
