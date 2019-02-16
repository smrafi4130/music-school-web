import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class StorageService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) {}

  set(key: string, value: any): any {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }
  remove(key: string): any {
    return localStorage.removeItem(key);
  }
  getCurrentUserId() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      // console.log(jwtPayload);
      return jwtPayload.id;
    } else {
      return false;
    }
  }

  getCurrentUserCategory() {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = this.jwtHelper.decodeToken(token);
      return jwtPayload.user_category_id;
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

  getCurrentAccessGroup(): string {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const jwtPayload = this.jwtHelper.decodeToken(token);
        console.log(jwtPayload.accessGroup.parent);
        return jwtPayload.accessGroup.parent;
      } else {
        return '';
      }
    } catch (e) {}
  }

  getAccessControlList(): any[] {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const jwtPayload = this.jwtHelper.decodeToken(token);

        return jwtPayload.access_group_id;
      } else {
        return [];
      }
    } catch (e) {}
  }
}
