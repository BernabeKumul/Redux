import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/page/Model/User';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as formTodo from 'src/app/page/home/home.action';

@Component({
  selector: 'app-change-bock-status',
  templateUrl: './change-bock-status.component.html',
  styles: []
})
export class ChangeBockStatusComponent implements OnInit {
  @Input() user:User;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  
  ChangeStauts(){
    const accion = new formTodo.ToogleTodo(this.user.Id);
    this.store.dispatch(accion);
 }

}
