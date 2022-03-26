import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generate-project',
  templateUrl: './generate-project.component.html',
  styleUrls: ['./generate-project.component.css']
})
export class GenerateProjectComponent implements OnInit {

  // project: Project = {
  //   type: 'Web/Mobile/CommandLine',
  //   tag: 'This is a project tag...',
  //   description: 'This is a long description..',
  //   stack: 'this is recommended tech stack...'
  // }

  project!: Observable<Project>;

  // valued:number = 0;
  isShow:boolean = false;
  readonly ROOT_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  GenerateProject(): void {
    this.isShow = true;
    this.project = this.http.get<Project>(this.ROOT_URL+'/project/');
  }

  ngOnInit(): void {
  }

}
