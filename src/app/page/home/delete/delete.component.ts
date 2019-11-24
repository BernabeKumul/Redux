import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import * as fromTodo from 'src/app/page/home/home.action';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() iIdUser;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  
  confirm(){
    const accion = new fromTodo.DeleteTodo(this.iIdUser);
    this.store.dispatch(accion);
  }

}
