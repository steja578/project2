import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count$:Observable<number> | undefined;

  constructor(private store: Store) {
    this.count$ = store.select((state: any) => state.counterReducer); // Selector
  }

  increment() {
    const actionObj = this.increment();
    this.store.dispatch(actionObj);
  }
  decrement() {
    const actionObj = this.decrement();
    this.store.dispatch(actionObj);
  }
  reset() {
    const actionObj = this.reset();
    this.store.dispatch(actionObj);
  }
  
}
