import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Model/User';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css']
})
export class EditInformationComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }
 
  EditInformation(){
    
  }

}
