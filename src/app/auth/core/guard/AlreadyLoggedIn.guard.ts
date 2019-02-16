import { StorageService } from './../../../services/storage.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AlreadyLoggedInGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}

  canActivate() {
    try {
      const currentUserId = this.storageService.getCurrentUserId();
      if (currentUserId) {
        this.router.navigate([
          '/' + this.storageService.getCurrentAccessGroup() + '-dashboard'
        ]);
        return false;
      } else {
        return true;
      }
    } catch (e) {
      // this.router.navigate(['/auth/login']);
      return true;
    }
  }
}
