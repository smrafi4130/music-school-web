import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentCourseService {
  EndPoint = environment.API_ENDPOINT + `/studentcourses/`;

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
        ''}&limit=${option.limit || 'all'}&page=${option.page || ''}`
    );
  }

  getById(id: Number) {
    return this.http.get(`${this.EndPoint}${id}`);
  }

  getByCouseId(course_id: any) {
    return this.http.get(`${this.EndPoint}?course_id=${course_id}`);
  }

  notByStudentId(student_id: Number) {
    return this.http.get(`${this.EndPoint}?student_id!=${student_id}`);
  }

  getByStudentId(student_id: any) {
    return this.http.get(`${this.EndPoint}?student_id=${student_id}`);
  }

  getByUserId(user_id: any) {
    return this.http.get(`${this.EndPoint}?user_id=${user_id}`);
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
