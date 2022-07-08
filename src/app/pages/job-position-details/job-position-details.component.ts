import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-job-position-details',
  templateUrl: './job-position-details.component.html',
  styleUrls: ['./job-position-details.component.scss']
})
export class JobPositionDetailsComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setCurrentTitle("Shift Manager");
  }

}
