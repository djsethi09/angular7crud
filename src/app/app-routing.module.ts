import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListNotesComponent} from './life-note/list-notes/list-notes.component';
import {AddNoteComponent} from './life-note/add-note/add-note.component';
import {EditNoteComponent} from './life-note/edit-note/edit-note.component';
const routes: Routes = [ {
  path: 'note/create',
  component: AddNoteComponent
},
{
  path: 'notes',
  component: ListNotesComponent
},
{
  path: 'notes/edit/:id',
  component: EditNoteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
