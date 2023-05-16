import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee';

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
    Gender: true,
    Email: '',
    Phone: '',
    Address: '',
    DepartmentID: 0,
    Block: true,
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

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if(params['queryData']) {
        this.user = JSON.parse(params['queryData']);
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
    })
    this.userData = this.fb.group({
    })
  }

  ngOnInit() {
  }

  updateUser(){
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

    alert('You are updated: '+ upUser.Fullname);

    this.router.navigate(['/userManagement']);
  }
}
