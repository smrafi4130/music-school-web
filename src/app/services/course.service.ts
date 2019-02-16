import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {
  EndPoint = environment.API_ENDPOINT + `/courses/`;

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

  getByInstructorId(instructor_id: any) {
    return this.http.get(`${this.EndPoint}?instructor_id=${instructor_id}`);
  }


  getByCourseName(course_name: any) {
    return this.http.get(`${this.EndPoint}?course_name=${course_name}`);
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
