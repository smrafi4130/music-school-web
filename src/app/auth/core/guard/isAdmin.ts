import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class IsAdmin implements CanActivate {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router) {}

  canActivate() {
    try {
      if (1) {
        this.router.navigate(['/dashboard']);
        return false;
      } else {
        return true;
      }
    } catch (e) {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
