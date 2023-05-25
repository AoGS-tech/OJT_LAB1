import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Employee } from 'src/model/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

@Injectable()
export class UserManagementComponent implements OnInit {

  totalEmployeePerPage: number[] = [5, 10, 15, 20];

  items: Employee[] = []; // Dữ liệu cần phân trang
  displayedItems: Employee[] = []; // Dữ liệu hiển thị trên trang hiện tại
  itemsPerPage: number = 5; // Số lượng mục trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
  totalPages: number = 1; // Tổng số trang
  pageButton1: number = 1;
  pageButton2: number = 2;
  pageButton3: number = 3;
  pageActive: number = 1;

  listForm: FormGroup;
  search: FormControl = new FormControl('');
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.listForm = this.fb.group({
    })
    // Khởi tạo dữ liệu và gán cho biến items
    this.getListUsers().subscribe((val: any) => {
      this.items = val.data;
      this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
      this.updateDisplayedItems('');
    })
  }

  async ngOnInit() {


  }


  addNew() {
    this.router.navigate(['/userInfo']);
  }
  passUpdate(item: Employee) {
    const status = "update";
    const queryData = JSON.stringify(item)
    const navigationExtras: NavigationExtras = {
      state: { queryData }
    };
    this.router.navigate(["/userInfo"], navigationExtras);
  }

  handleBlock(item: Employee) {
    // alert('You are blocked user: ' + item.EmpID);
    this.http.get('http://localhost:8080/user/block/' + item.EmpID).subscribe((rs) => {
      if (rs == "ok") {
        // alert('You are blocked user: ' + item.Fullname);
        // Khởi tạo dữ liệu và gán cho biến items
        this.getListUsers().subscribe((val: any) => {
          this.items = val.data;
          this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
          this.updateDisplayedItems('');
          console.log(val.data);
        })
      }
    })
  }

  handleUnBlock(item: Employee) {
    this.http.get('http://localhost:8080/user/unblock/' + item.EmpID).subscribe((rs) => {
      if (rs == "ok") {
        // alert('You are unblocked user: ' + item.Fullname);
        // Khởi tạo dữ liệu và gán cho biến items
        this.getListUsers().subscribe((val: any) => {
          this.items = val.data;
          this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
          this.updateDisplayedItems('');
        })
      }
    })
  }

  updateItemPerPage(target: any) {
    this.itemsPerPage = target.value;
    this.updateDisplayedItems('');
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.pageActive = page;
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    this.updateDisplayedItems('');
  }

  updateDisplayedItems(val: string) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    var endIndex = startIndex + this.itemsPerPage;
    var views = this.items;

    // console.log(val.value);
    if(val != ''){
      views = this.items.filter((e)=> e.Fullname.includes(val))
    }
    console.log(views);
    if(endIndex > views.length) endIndex = views.length;
    this.displayedItems = views.slice(startIndex, endIndex);
    // this.displayedItems = this.items;
  }



  //list = users
  getListUsers(): Observable<any> {
    //return list
    return this.http.get<Employee[]>('http://localhost:8080/user/list');
  }
  nextPage() {
    if (this.pageButton3 < this.totalPages) {
      this.pageButton1 = this.pageButton1 + 1;
      this.pageButton2 = this.pageButton2 + 1;
      this.pageButton3 = this.pageButton3 + 1;
    }
    if (this.currentPage < this.totalPages) {
      this.onPageChange(this.currentPage + 1);
    }
  }

  prePage() {
    if (this.pageButton1 > 1) {
      this.pageButton1 = this.pageButton1 - 1;
      this.pageButton2 = this.pageButton2 - 1;
      this.pageButton3 = this.pageButton3 - 1;

    }
    if (this.currentPage > 1) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  filter(){
    // alert(this.search.value);
    this.updateDisplayedItems(this.search.value);
  }
}
