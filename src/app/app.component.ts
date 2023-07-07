import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Performance } from '@angular/fire/performance';
import { Storage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  private performance: Performance = inject(Performance);
  private storage: Storage = inject(Storage);
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;
  title = Title;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }
}