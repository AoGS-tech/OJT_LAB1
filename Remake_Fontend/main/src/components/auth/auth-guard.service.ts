import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

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

  constructor(private router: Router, private http: HttpClient) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Kiểm tra xem người dùng có quyền truy cập vào route này hay không
    this.getUser();
    if(this.user.Role == '1') return true;
    else { // để tạm, cái này không an toàn
      if(this.token != '') {
        this.router.navigate(['/home']);
        return false;
      }
      else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }

  getUser() {
    console.log('Get user')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http.get('http://localhost:8080/check/manager', { headers }).subscribe((res: any) => {
      this.user = res;
      console.log(res);
    })
  }
}
