import { Component, OnInit } from '@angular/core';
import { JobPositionDetailsProvider } from 'src/app/providers/job-position-details.provider';

@Component({
  selector: 'app-job-position-details-people',
  templateUrl: './job-position-details-people.component.html',
  providers: [JobPositionDetailsProvider],
  styleUrls: ['./job-position-details-people.component.scss']
})
export class JobPositionDetailsPeopleComponent implements OnInit {

  constructor(
    private jobPositionDetailsProvider: JobPositionDetailsProvider
  ) { }

  ngOnInit(): void {
  }

}
