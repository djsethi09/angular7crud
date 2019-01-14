import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  angForm: FormGroup;
  note:any={};
  constructor(private route: ActivatedRoute,private fb: FormBuilder,private router: Router,private noteService:NoteService) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      description:[]
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.noteService.editNote(params['id']).subscribe(res => {
        console.log(res);
        this.note = res;
      });
    });
  }

  updateNote(title, description) {
    this.route.params.subscribe(params => {
       this.noteService.updateNote(title,description, params['id']);
       this.router.navigate(['notes']);
    });
  }
}
