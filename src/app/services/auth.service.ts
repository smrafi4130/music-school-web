import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { JwtHelper } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();
  public token: string;
  private EndPoint = `${environment.API_ENDPOINT}/auth/login`;
  private EndPoint2 = `${environment.API_ENDPOINT}/auth/signUp`;

  constructor(private http: HttpClient) {}

  login(user_name: string, password: string): Observable<any> {
    return this.http.post(this.EndPoint, {
      user_name: user_name,
      password: password
    });
  }

  signup(payload: any): Observable<any> {
    return this.http.post(this.EndPoint2, payload);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return false;
  }

  getCurrentUserId() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      return jwtPayload.id;
    } else {
      return false;
    }
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      return jwtPayload;
    } else {
      return false;
    }
  }
  getCurrentUserInfo() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      // console.log('data is here', jwtPayload);
      return jwtPayload;
    } else {
      // console.log('problem is here');
      return false;
    }
  }
  updatePasswod(current_user_id: any, payload: any) {
    return this.http.put(
      `${this.EndPoint}?user_id=${current_user_id}`,
      payload
    );
  }
}
