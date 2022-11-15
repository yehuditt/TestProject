import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContact } from 'src/app/entities/IContact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
@Input() contactPersons:IContact[];
@Output() addInsuredEvent = new EventEmitter<void>();
@Output() changeListEvent = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
  }
  addNew(){
    this.addInsuredEvent.emit();
  }
  reset(){
    this.contactPersons=[];
    this.changeListEvent.emit(this.contactPersons);
  }
  basicReset(){
    this.contactPersons=this.contactPersons.filter(x=>x.deliveryFlag==true);
    this.changeListEvent.emit(this.contactPersons);
    }
}
