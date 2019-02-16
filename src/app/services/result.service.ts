import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ResultService {
  EndPoint = environment.API_ENDPOINT + `/results/`;

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

  getPostByUser(user_id: any) {
    return this.http
      .get(`${this.EndPoint}?where={"deletedAt":null,"user_id":"${user_id}"}`)
  }

  getById(id: Number) {
    return this.http.get(`${this.EndPoint}${id}`);
  }



  postByUser(current_user_id: any) {
    return this.http.get(`${this.EndPoint}?user_id=${current_user_id}`);
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
