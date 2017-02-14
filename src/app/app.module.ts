import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionsService } from './sessions/sessions.service';
import { SessionComponent } from './sessions/session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [
    SessionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
