import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {
  EndPoint = environment.API_ENDPOINT + `/admins`;

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

  getById(id: Number) {
    return this.http.get(`${this.EndPoint}${id}`);
  }

  signup(payload: any): Observable<any> {
    return this.http
      .post(this.EndPoint, {
        email: payload.email,
        password: payload.password,
        user_name: payload.user_name,
        first_name: payload.first_name,
        last_name: payload.last_name,
        address: payload.address,
        gender: payload.gender,
        contact_no: payload.contact_no,
        access_group_id: payload.access_group_id

      })
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(this.EndPoint + id);
  }
  update(id: Number, payload: any): Observable<any> {
    return this.http.put(this.EndPoint + id, payload);
  }
}
