import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { LibraryComponent } from './components/library/library.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ExtrasComponent } from './components/extras/extras.component';

import {StoryService} from './services/story.service';
import {CommentService} from './services/comment.service';

import { JsonPagesPipe } from './components/library/pages.pipe';
import { NoContentComponent } from './components/no-content/no-content.component';
import { CommentsComponent } from './components/comments/comments.component';
import { StoryComponent } from './components/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LibraryComponent,
    NavbarComponent,
    GalleryComponent,
    ExtrasComponent,
    NoContentComponent,
    CommentsComponent,
    StoryComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    StoryService,
    JsonPagesPipe,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
