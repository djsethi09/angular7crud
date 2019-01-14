import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../note.service';
import Note from '../../Note';
@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  
  constructor(private noteService:NoteService) { }
  notes=[];
  ngOnInit() {
    this.noteService
      .getNotes()
      .subscribe((data: Note[]) => {
        this.notes = data;
    });
      
  }

  deleteNote(id){
    this.noteService.deleteNote(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
