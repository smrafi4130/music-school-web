import { Injectable } from '@angular/core';
import {
  CanLoad,
  CanActivate,
  Route,
  Router,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor() {}
  // canLoad(route: Route): boolean {

  //     return route.data["role"] === 'factory1';

  // }
  canActivate(): boolean {
    return true;
  }
}
