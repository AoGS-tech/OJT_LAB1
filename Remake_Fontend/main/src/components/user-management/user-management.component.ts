import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  items: Employee[] = [] ; // Dữ liệu cần phân trang
  displayedItems: Employee[] = []; // Dữ liệu hiển thị trên trang hiện tại
  itemsPerPage: number = 5; // Số lượng mục trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
  totalPages: number; // Tổng số trang


  listForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    // Khởi tạo dữ liệu và gán cho biến items
    this.getListUsers().subscribe((val: any) => {
      this.items = val.data;
      console.log(this.items);
    })
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    this.updateDisplayedItems();
    this.listForm = this.fb.group({
    })
  }

  ngOnInit() {
  }

  addNew(){
    this.router.navigate(['/userInfo']);
  }
  passUpdate(item: Employee){
    const status = "update";
    const queryData = JSON.stringify(item)
    const navigationExtras: NavigationExtras = {
      state: { queryData }
    };
    this.router.navigate(["/userInfo"], navigationExtras);
  }

  handleBlock(item: Employee){
    alert('You are blocked user: ' + item.Fullname);
  }

  handleUnBlock(item: Employee){
    alert('You are unblocked user: ' + item.Fullname);
  }

  updateItemPerPage(target: any){
    this.itemsPerPage = target.value;
    this.updateDisplayedItems();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    this.updateDisplayedItems();
  }

  updateDisplayedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    // this.displayedItems = this.items.slice(startIndex, endIndex);
    this.displayedItems = this.items;
  }



  getListUsers(): Observable<any>{
    return this.http.get<Employee[]>('http://localhost:8080/user/list');
  }

}
