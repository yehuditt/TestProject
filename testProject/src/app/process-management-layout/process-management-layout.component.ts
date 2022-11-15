import { Component, OnInit } from '@angular/core';
import { IContact } from '../entities/IContact';
import { IProcess } from '../entities/IProcess';

@Component({
  selector: 'app-process-management-layout',
  templateUrl: './process-management-layout.component.html',
  styleUrls: ['./process-management-layout.component.css']
})
export class ProcessManagementLayoutComponent implements OnInit {
  superClaimType: any = [
    { code: 1, value: "התביעה אושרה" },
    { code: 2, value: "התביעה נדחתה" },
    { code: 4, value: "טרם התקבלה החלטה" }
  ];
  superClaimStatus: any = [{ code: 1, value: 'פתוחה' }, { code: 2, value: 'סגורה' }];
  process: IProcess = {
    superClaim: {
      superClaimNum: 500040204,
      superClaimStatus: {
        code: 1,
        value: "פתוחה"
      },
      superClaimType: {

      },
      claimCause: {

      },
      injuryType: {

      },
      eventDate: null,
      submitedBy: null,
      submitionMethod: {

      },
    },
    insured: {
      address: {
        cityName: 'tel aviv',
        streetName: 'lllstreet',
      },
      identityType: 1,
      age: 30,
      lastName: "כהן",
      identity: 312536945,
      firstName: "אסף",
    },
    contactPersons: [{
      id: 1,
      deliveryFlag: true,
      type: {
        code: 1,
        value: 'type',
      },
      name: "ניקיטה ג'ין",
      phoneNumber: 533121212,
      email: 'xxx@gmail',
      address: 'dd address',
    }]
  };
  refreshForm:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  updateContactList(list: IContact[]) {
    this.process.contactPersons = list;
  }

  addInsured() {
    var insured = this.process.insured;
    var newContact: IContact = {
      address: insured.address.streetName + " " + insured.address.cityName,
      deliveryFlag: false,
      email: '',
      id: this.process.contactPersons.length,
      name: insured.firstName + " " + insured.lastName,
      phoneNumber: 0,
      type: {
        code: 1,
        value: ''
      }

    };
    this.process.contactPersons.push(newContact);
  }

  refreshProcess() {
    this.isValideForm=false;
    this.refreshForm=true;
    this.process.contactPersons = [];
    this.process.superClaim = {
      superClaimNum: this.process.superClaim.superClaimNum,
      superClaimStatus: {
        code: 0,
        value: ""
      },
      superClaimType: {
        code: 0,
        value: ''
      },
      eventDate: 0,
      claimCause: {
        code: 0,
        value: ""
      },
      injuryType: {
        code: 0,
        value: ''
      },
      submitedBy: 0,
      submitionMethod: {
        code: 0,
        value: ''
      },

    };;
  }

  continue() {
    console.log("תביעה:"+this.process.superClaim.superClaimNum);
    console.log("סוג תביעת על:"+this.process.superClaim.superClaimType?.value);
    console.log("תאריך אירוע: "+this.process.superClaim.eventDate);
    console.log(" מהות אירוע:"+this.process.superClaim.injuryType?.value);
    console.log("הוגשה באמצעות:"+this.process.superClaim.submitedBy);
    console.log("אופן קבלת התביעה:"+this.process.superClaim.submitionMethod?.value);
  }
  isValideForm: boolean = false;
  isValideFormChange(isValid: boolean) {
    this.isValideForm = isValid;
  }
  claimFormChange(claim: any) {
    this.refreshForm=false;
    this.process.superClaim = claim;
  }
}
