import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  private EndPoint = `${environment.API_ENDPOINT}/users`;

  constructor(
    private http: HttpClient //private authenticationService: AuthService
  ) {}

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
        ''}&limit=${option.limit || 'all'}&page=${option.page || ''}`
    );
  }

  getAllInstructor(
    option: {
      name?: string;
      searchTerm?: String;
      limit?: any;
      page?: any;
    } = {}
  ) {
    return this.http.get(
      `${this.EndPoint}?access_group_id=1&search_term=${option.searchTerm ||
        ''}&limit=${option.limit || ''}&page=${option.page || ''}`
    );
  }

  getById(id: number) {
    return this.http.get(this.EndPoint + '/' + id);
  }

  // update(id: number, data: any) {
  //   return this.http
  //     .put(this.EndPoint + '/' + id, data)
  //     .map(response => response);
  // }
  // update(id: number, data: any) {
  //   return this.http
  //     .put(`${this.EndPoint}/${id}`, data)
  //     .map(response => response);
  // }
  // update(id: Number, payload): Observable<any> {
  //   console.log('service', id, payload);
  //   return this.http.put(this.EndPoint + '/' + +id, payload);
  // }

  update(id: number, payload: any) {
    return this.http.put(this.EndPoint + '/' + id, payload);
  }

  insert(data) {
    return this.http.post(this.EndPoint, data);
  }

  delete(id) {
    return this.http.delete(`${this.EndPoint}/${id}`);
  }

  checkUsername(username: any) {
    return this.http
      .get(`${this.EndPoint}?where={"deletedAt":null,"username":"${username}"}`);
  }

  checkEmail(email: any) {
    return this.http
      .get(`${this.EndPoint}?where={"deletedAt":null,"email":"${email}"}`);
  }

  checkPhone(phone: any) {
    return this.http
      .get(`${this.EndPoint}?where={"deletedAt":null,"phone":"${phone}"}`);
  }
}
