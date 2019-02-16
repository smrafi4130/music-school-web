import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotificationService {
  EndPoint = environment.API_ENDPOINT + `/notifications/`;

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

  getByUserId(user_id: any) {
    return this.http
      .get(`${this.EndPoint}?user_id=${user_id}&deleted_at=`)
  }

  getById(id: Number) {
    return this.http.get(`${this.EndPoint}${id}`);
  }

  create(payload: any) {
    return this.http.post(this.EndPoint, payload);
  }

  delete(id: Number) {
    return this.http.delete(this.EndPoint + id);
  }
  update(id: Number, payload: any) {
    return this.http.put(this.EndPoint + id, payload);
  }
}
