import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/page/Model/User';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as formTodo from 'src/app/page/home/home.action';
import * as modalAction from 'src/app/page/home/Redux/modal.action';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {

  @Input() isVisible: boolean;
  @Input() user:User;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
  }

  ChangeStauts(){
     const accion = new formTodo.ToogleTodo(this.user.Id);
     this.store.dispatch(accion);
  }

  handleCancel(): void {
    const accion = new modalAction.showModal('EDITAR');
    this.store.dispatch(accion);
  }

  handleOk(): void{
    
  }

}
