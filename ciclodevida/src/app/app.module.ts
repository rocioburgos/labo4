import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, 
  //  AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
