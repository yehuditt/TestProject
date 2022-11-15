import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Input() contactPersons: any[];
  submitedBy = [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' },
  ];
  addingNew: boolean = false;
  newContact: any = null;
  @Output() changeListEvent = new EventEmitter<any[]>();
  onlyHebrewPattern = /^[א-ת\s]+$/;
  onlyDigitsPattern = /^-?(0|[1-9]\d*)?$/;
  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  constructor() { }

  ngOnInit(): void {
  }
  getSubmitedByValue(code: any) {

    return this.submitedBy.filter(x => x.code == code)[0]?.value;
  }

  addNewContact() {
    this.newContact = {
      id: 0,
      deliveryFlag: false,
      type: {
        code: 0,
        value: '',
      },
      name: "",
      phoneNumber: null,
      email: '',
      address: '',
    };
    this.addingNew = true;
  }
  addNewContactToList() {
    debugger;
    this.contactPersons.push(this.newContact);
    this.changeListEvent.emit(this.contactPersons);
    this.addingNew = false;

  }
}
