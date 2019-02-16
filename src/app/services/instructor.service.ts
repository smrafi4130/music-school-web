import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InstructorService {
  EndPoint = environment.API_ENDPOINT + `/instructors/`;

  constructor(private http: HttpClient) {}

  getAll(
    option: {
      name?: string;
      searchTerm?: String;
      limit?: any;
      page?: any;
    } = {}
  ) {
    return this.http.get(
      `${this.EndPoint}?search_term=${option.searchTerm ||
        ''}&limit=${option.limit || ''}&page=${option.page || ''}`
    );
  }
  getByUserId(current_user_id: any) {
    return this.http.get(`${this.EndPoint}?user_id=${current_user_id}`);
  }
  getById(id: Number) {
    return this.http.get(`${this.EndPoint}${id}`);
  }

  create(payload: any): Observable<any> {
    return this.http.post(this.EndPoint, payload);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(this.EndPoint + id);
  }

  update(id: Number, payload: any): Observable<any> {
    return this.http.put(this.EndPoint + id, payload);
  }
}
