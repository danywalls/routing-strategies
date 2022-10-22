import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    AppRoutingModule,
      BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
