import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-generate-project',
  templateUrl: './generate-project.component.html',
  styleUrls: ['./generate-project.component.css']
})
export class GenerateProjectComponent implements OnInit {
  // project_idea:string = 'This is a project idea';
  project: Project = {
    type: 'Web/Mobile/CommandLine',
    tag: 'This is a project tag...',
    description: 'This is a long description..',
    stack: 'this is recommended tech stack...'
  }
  valued:number = 0;
  GenerateProject(): void {
    this.valued = Math.floor((Math.random() * 100) + 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
