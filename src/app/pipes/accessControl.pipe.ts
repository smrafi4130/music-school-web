import { StorageService } from './../services/storage.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'accessControl' })
export class AccessControlPipe implements PipeTransform {
  constructor(private storageService: StorageService) {}

  transform(value: string, args: boolean): boolean {
    return this.storageService.getAccessControlList().includes(value);
  }
}
