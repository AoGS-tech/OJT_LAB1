import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {

  pageNumber: number = 0;
  constructor(){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.pagination(1);
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
      gender: false,
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

  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return this.employees.length / this.itemsPerPage + 1;
  }

  get displayedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.employees.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if(page > 0 && page < this.totalPages) this.currentPage = page;
  }

  showNextButton(): any{
    if(this.currentPage < this.totalPages) return true;
    else return false;
  }

  showPrePButton(): any {
    if(this.currentPage > 1) return true;
    else return false;
  }
}
