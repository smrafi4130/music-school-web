import { AccessControlPipe } from './../../../pipes/accessControl.pipe';
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, CanActivateChild} from '@angular/router';


@Injectable()
export class AccessControlGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router, private accessControlPipe: AccessControlPipe) {
    }

    canActivate(route: ActivatedRouteSnapshot) {

        const accessData = route.data["accessData"];
        try {
            if (this.accessControlPipe.transform(accessData, true)) {
                return true;
            } else {
                this.router.navigate(['/']);
                return false;
            }
        } catch (e) {
            this.router.navigate(['/']);
            return false;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot) {
        return this.canActivate(route);
    }
}
