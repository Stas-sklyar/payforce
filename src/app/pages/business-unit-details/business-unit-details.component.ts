import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-business-unit-details',
  templateUrl: './business-unit-details.component.html',
  styleUrls: ['./business-unit-details.component.scss']
})
export class BusinessUnitDetailsComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setCurrentTitle("Business Unit 1");
  }

}
