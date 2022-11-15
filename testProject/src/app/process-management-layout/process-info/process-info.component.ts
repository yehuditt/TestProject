import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProcess } from 'src/app/entities/IProcess';

@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.css']
})
export class ProcessInfoComponent implements OnInit {
  @Input() process: IProcess;
  @Input() refreshForm:boolean;

  @Output() isValideFormChange = new EventEmitter<boolean>();
  @Output() claimFormChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  isValideFormChangeFunc(isValid: boolean) {
    this.isValideFormChange.emit(isValid);
  }
  claimFormChangeFunc(claim: any) {
    this.claimFormChange.emit(claim);
  }
}
