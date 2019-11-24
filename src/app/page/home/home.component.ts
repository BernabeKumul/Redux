import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { CrearComponent } from './Modals/crear/crear.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as modalAction from 'src/app/page/home/Redux/modal.action';
import { optionModal, modal } from '../Model/Modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modales: optionModal [] = ['AGREGAR', 'EDITAR', 'VISUALIZAR'] ;
  Modals: modal[] = [];

  constructor(private modalService: NzModalService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
       this.Modals = state.modal;
    })
  }

  showModal(modal: optionModal){
    console.log(modal)
    const accion = new modalAction.showModal(modal);

    this.store.dispatch(accion);

  }

}
