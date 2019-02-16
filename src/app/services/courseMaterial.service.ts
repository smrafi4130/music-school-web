import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CourseMaterialService {
  EndPoint = environment.API_ENDPOINT + `/coursematerials/`;

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

  getByCourseId(course_id: any) {
    return this.http.get(`${this.EndPoint}?course_id=${course_id}`);
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
