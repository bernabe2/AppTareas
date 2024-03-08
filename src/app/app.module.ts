import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TareasBscaComponent } from './components/tareas-bsca/tareas-bsca.component';
import { NavbarBscaComponent } from './components/navbar-bsca/navbar-bsca.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasBscaComponent,
    NavbarBscaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
