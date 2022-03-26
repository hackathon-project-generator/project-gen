import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-project',
  templateUrl: './generate-project.component.html',
  styleUrls: ['./generate-project.component.css']
})
export class GenerateProjectComponent implements OnInit {
  project_idea: string = 'This is a project idea';
  constructor() { }

  ngOnInit(): void {
  }

}
