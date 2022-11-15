import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insuerd-details',
  templateUrl: './insuerd-details.component.html',
  styleUrls: ['./insuerd-details.component.css']
})
export class InsuerdDetailsComponent implements OnInit {
@Input() insured:any;
  constructor() { }

  ngOnInit(): void {
  }

}
