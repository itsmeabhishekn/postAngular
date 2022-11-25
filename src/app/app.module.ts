import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
