import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
notes=[];
uri = 'http://localhost:4000/notes';
  constructor(private http: HttpClient) { }
  addNote(title,description){
    
    const obj = {
      title: title,
      description:description
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getNotes(){
    return this
           .http
           .get(`${this.uri}`);
}
editNote(id) {
  return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }
  updateNote(title,description, id) {

    const obj = {
        title: title,
          description: description,
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteNote(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
