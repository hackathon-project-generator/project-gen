import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private ROOT_URL = 'http://localhost:4200/api';

  getProject(): Observable<Project> {
    return this.http.get<Project>(this.ROOT_URL);
  }

  constructor(private http: HttpClient) { }
}
