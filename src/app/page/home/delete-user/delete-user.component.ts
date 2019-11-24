import { Component, OnInit, Input } from '@angular/core';
// import { AppState } from 'src/app/app.reducer';
// import { Store } from '@ngrx/store';
// import * as formTodo  from 'src/app/page/home/home.action';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  // @Input() id;

  constructor() { }

  ngOnInit() {
  }

  DeleteInformation(){
    //  const accion = new formTodo.DeleteTodo(this.id);

    //  this.store.dispatch(accion);
  }

}
