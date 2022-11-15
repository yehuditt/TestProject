import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {
  @Input() claim: any;
  @Input() refreshForm: boolean;
  @Output() isValideFormChange = new EventEmitter<boolean>();
  @Output() claimFormChange = new EventEmitter<any>();
  @ViewChild('processForm', { read: NgForm }) form!: NgForm;

  //להוציא בהמשך לקובץ חיצוני משותף
  submitedBy: any = [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' },
  ];

  superClaimType: any = [
    { code: 1, value: "התביעה אושרה" },
    { code: 2, value: "התביעה נדחתה" },
    { code: 4, value: "טרם התקבלה החלטה" }
  ];

  claimCause: any = [
    { code: 1, value: "תאונה" },
    { code: 2, value: "מחלה" },
    { code: 5, value: "תאונת עבודה" },
    { code: 6, value: "אחר" },
  ];
  injuryType: any = [
    { code: 1, value: "אגן" },
    { code: 2, value: "גפיים" },
    { code: 5, value: "ראש" },
    { code: 6, value: "גב" },
    { code: 7, value: "לב" },
    { code: 9, value: "נפש" },
  ];
  submitionMethod: any = [
    { code: 1, value: 'דואר' },
    { code: 2, value: 'דיגיטל' },
    { code: 3, value: 'פקס' },
  ];
  identityTypes: any = [
    { code: 1, value: 'ת.ז.' },
    { code: 2, value: 'דרכון' },
    { code: 3, value: 'מבוטח' },
    { code: 4, value: 'מפעל' }
  ];

  isFormValid: boolean = false;

  changeForm(isValid: boolean) {
    this.isFormValid = isValid;
    this.isValideFormChange.emit(this.isFormValid);
    this.claimFormChange.emit(this.claim);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    if (this.refreshForm == false) { 
      this.form.reset()
    }
  }
}
