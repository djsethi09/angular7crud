import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {NoteService} from '../../note.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private noteService:NoteService) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      description:[]
    });
  }

  ngOnInit() {
  }
  addNote(title,description) {
    this.noteService.addNote(title,description);
    this.router.navigate(['notes/']);
  }
}
