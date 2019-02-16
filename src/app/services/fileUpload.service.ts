import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploadService {
  EndPoint = environment.API_ENDPOINT + `/fileUploads/`;

  constructor(private http: HttpClient) {}

  uploadImage(payload: any): Observable<any> {
    return this.http.post(this.EndPoint + 'uploadImage', payload);
  }
}
