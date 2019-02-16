import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private router: Router) {
    }

    canActivate() {

        try {
            const token = localStorage.getItem('token');
            if (localStorage.getItem('currentUser') && token) {
                return true;
            }
            this.router.navigate(['/login']);
            return false;
        } catch (e) {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
