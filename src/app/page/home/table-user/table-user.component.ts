import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { User } from '../../Model/User';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styles: []
})
export class TableUserComponent implements OnInit {

  Users: User[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state =>{
      this.Users = state.user
    });
  }


}
