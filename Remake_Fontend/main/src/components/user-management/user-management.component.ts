import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  totalEmployeePerPage: number[] = [5, 10, 15, 20];

  items: Employee[]; // Dữ liệu cần phân trang
  displayedItems: Employee[] = []; // Dữ liệu hiển thị trên trang hiện tại
  itemsPerPage: number = 5; // Số lượng mục trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
  totalPages: number; // Tổng số trang

  listForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    // Khởi tạo dữ liệu và gán cho biến items
    this.items = this.getListUser(20);
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
    this.displayedItems = this.items.slice(startIndex, endIndex);
  }

  fullname(): any {
    const firstName = ["Trung", "Thanh", "Quoc", "Anh", "Thi Tam", "Thi An", "Quynh Anh", "Van Toan", "Huy"];
    const lastName = ["Tran", "Nguyen", "Ly", "Phan", "Le", "Hoang", "Vu", "Đinh", "Đang", "Duong"];
    const fIndex = Math.floor(Math.random() * firstName.length);
    const lIndex = Math.floor(Math.random() * lastName.length);
    return firstName[fIndex] + " " + lastName[lIndex];
  }


  birthay(): any {
    const dd = Math.floor(Math.random()) + 1;
    const MM= Math.floor(Math.random() * 31) + 1;
    const YY = Math.floor(Math.random() * 15) +  1990;
    return YY + "-" + MM + "-" + dd;
  }

  gender(): any {
    const g = [true, false];
    return g[Math.floor(Math.random()*2)];
  }

  email(): any {

  }

  phone(): any {
    var number = "0";
    for(var i = 0; i < 9; i++){
      number += (Math.floor(Math.random() * 9) +1 ) + "";
    }
    return number;
  }

  address(): any {
    var add = ["HaNoi", "DaNang", "HoChiMinh"];
    return add[Math.floor(Math.random() * add.length)];
  }

  department(): any {
    const de = ["IT", "Marketing", "Sale"];
    return Math.floor(Math.random() * de.length);
  }

  block(): any {
    const g = [true, false];
    return g[Math.floor(Math.random()*2)];
  }

  role(): any{
    return 1;
  }

  getListUser(total: number): Employee[] {
      let list: Employee[] =[];
      for(var i = 0; i < total; i++){
        let emp: Employee = {
          EmpID: i+1,
          Fullname: this.fullname(),
          Birthday: this.birthay(),
          Gender: this.gender(),
          Email: this.fullname().replace(/\s/g, "")+ i+1 + "@gmail.com",
          Phone: this.phone(),
          Address: this.address(),
          DepartmentID: 1,
          Block: this.block(),
          RoleID: 1
        }
        list.push(emp);
      }
      return list;
  }
}
