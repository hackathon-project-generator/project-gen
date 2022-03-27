import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-generate-project',
  templateUrl: './generate-project.component.html',
  styleUrls: ['./generate-project.component.css']
})
export class GenerateProjectComponent implements OnInit {

  isShow:boolean = false;

  projects!: Project;
  
  constructor(private projectService: ProjectService) { }

  getProjects(): void {
    this.isShow = true;
    this.projectService.getProject().subscribe(projects => this.projects = projects);
  }


  ngOnInit(): void {
    // this.project.subscribe();
    // this.getProjects();
  }

}
