import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccessGroupService {
  private EndPoint = `${environment.API_ENDPOINT}/accessGroups`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.EndPoint}?where={"deletedAt":null}`);
  }

  getById(id: number) {
    return this.http.get(this.EndPoint + '/' + id);
  }

  update(id: number, data: any) {
    return this.http.put(this.EndPoint + '/' + id, data);
  }

  insert(data) {
    return this.http.post(this.EndPoint, data);
  }

  delete(id) {
    return this.http.delete(`${this.EndPoint}/${id}`);
  }
}
