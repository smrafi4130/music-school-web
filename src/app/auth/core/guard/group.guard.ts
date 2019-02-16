import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from '../../../services/storage.service';

@Injectable()
export class GroupGuard implements CanActivate {
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    console.log('i am inter');
    const role = route.data['role'];
    console.log('role', role);
    if (this.storageService.getCurrentAccessGroup() === role) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
