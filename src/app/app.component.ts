import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface Notes {
  title: string;
  belt: string;
}

interface NotesId extends Notes {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  notesColection: AngularFirestoreCollection<Notes>;
  notes: any;

  title: string;
  belt: string;

  notesDoc: AngularFirestoreDocument<Notes>;
  note: Observable<Notes>;


  constructor(private afs: AngularFirestore) {
  }

  copyToClipboard(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input)
    return result;
  }

  ngOnInit() {
    this.notesColection = this.afs.collection('notes');
    this.notes = this.notesColection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Notes;
          const id = a.payload.doc.id;
          return {id, data};
        });
      }));
  }

  addNotes() {
    this.belt = '#' + Math.random().toString().slice(2, 8);
    this.afs.collection('notes').add({'title': this.title, 'belt': this.belt});
    this.title = '';
  }

  getNotes(noteId) {
    this.notesDoc = this.afs.doc('notes/' + noteId);
    this.note = this.notesDoc.valueChanges();
  }

  deleteNote(noteId) {
    this.afs.doc('notes/' + noteId).delete();
  }
}
