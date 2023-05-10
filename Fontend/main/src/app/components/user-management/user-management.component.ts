import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employees: Employee[] =
  [
    {
      id: 1,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 2,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 3,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 4,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 5,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 6,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 7,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 8,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 9,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 10,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 11,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 12,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 13,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 14,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 15,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 16,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    },
    {
      id: 17,
      fullname: "Nguyễn Văn A",
      birthday: "2002-12-02",
      gender: true,
      email: "seoao24@gmail.com",
      phone: "0961973785",
      address: "Lào Cai",
      department: "IT"
    }
  ]

  // hiện thị danh sách users
  show(innerHtml: string){
    let item = document.querySelector("#list-users");

    //kiểm tra, nếu user tồn tại thì thêm vào
    if(item){
      item.innerHTML = innerHtml;
    }
  }

  render(callback: (data: string) => any){
    let innerHtml = this.employees.map((e) => {
      return
      // <tr>
      // <td>${e.fullname}</td>
      // <td>${e.birthday}</td>
      // <td>${e.gender}</td>
      // <td>${e.email}</td>
      // <td>${e.phone}</td>
      // <td>${e.address}</td>
      // <td>${e.department}</td>
      // </tr>
    }).join('');
  }
}
