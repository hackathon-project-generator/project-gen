import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateProjectComponent } from './generate-project.component';

describe('GenerateProjectComponent', () => {
  let component: GenerateProjectComponent;
  let fixture: ComponentFixture<GenerateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
