import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenerateProjectComponent } from './generate-project/generate-project.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
