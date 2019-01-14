import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

@NgModule({
  declarations: [ListNotesComponent, AddNoteComponent, EditNoteComponent],
  imports: [
    CommonModule
  ]
})
export class LifeNoteModule { }
