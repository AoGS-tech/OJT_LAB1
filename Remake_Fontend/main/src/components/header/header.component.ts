import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = {
    Address:"",
    Birthday: "",
    Email: "",
    EmpID: "",
    Fullname: "",
    Gender: "",
    Phone: "",
    Role: ""
  }
  token: any = localStorage.getItem('token');

  constructor(private http: HttpClient, private router: Router) { }

  async ngOnInit() {
    await this.getUser();
  }

  getUser() {
    console.log('Get user')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http.get('http://localhost:8080/check/manager', { headers }).subscribe((res: any) => {
      this.user = res;
      console.log(res);
    })
  }

  onViewProfile(){
    const queryData = JSON.stringify(this.user)
    const navigationExtras: NavigationExtras = {
      state: { queryData }
    };
    this.router.navigate(["/userInfo"], navigationExtras);
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
