import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListNotesComponent} from './life-note/list-notes/list-notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AddNoteComponent} from './life-note/add-note/add-note.component';
import {EditNoteComponent} from './life-note/edit-note/edit-note.component';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
@NgModule({
  declarations: [
    AppComponent,
    ListNotesComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
