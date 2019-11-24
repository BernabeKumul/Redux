import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/page/Model/User';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as formTodo from 'src/app/page/home/home.action';
import * as modalAction from 'src/app/page/home/Redux/modal.action';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent implements OnInit {
  @Input() isVisible: boolean;
  validateForm: FormGroup;

  user: User = { Id: 0, Email: "", Name: "", Enable: false };

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      fieldA: [null, [Validators.required]],
      filedB: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      return;
    }

    const action = new formTodo.AgregarTodo(
      this.user.Name,
      this.user.Email);

    this.store.dispatch(action);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    const accion = new modalAction.showModal('AGREGAR');

    this.store.dispatch(accion);
  }

  handleOk(): void{
    if (this.validateForm.invalid) {
      return;
    }

    const action = new formTodo.AgregarTodo(
      this.user.Name,
      this.user.Email);
    this.store.dispatch(action);
    
    const accion = new modalAction.showModal('AGREGAR');
    this.store.dispatch(accion);
  }
}

