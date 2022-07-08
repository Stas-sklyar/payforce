import { Component, OnInit } from '@angular/core';
import { JobPositionDetailsProvider } from 'src/app/providers/job-position-details.provider';

export interface ISummaryOfJobPositionDetails {
  current_attribution: string;
  contract: {
    type: string;
    hours: number;
  };
  remaining_paid_vacations: number;
  manager: string;
  department: string;
  funded: string;
}

@Component({
  selector: 'app-job-position-details-summary',
  templateUrl: './job-position-details-summary.component.html',
  providers: [JobPositionDetailsProvider],
  styleUrls: ['./job-position-details-summary.component.scss']
})
export class JobPositionDetailsSummaryComponent implements OnInit {
  summaryData: ISummaryOfJobPositionDetails = {
    current_attribution: "-",
    contract: {
      type: "-",
      hours: 0
    },
    remaining_paid_vacations: 0,
    manager: "-",
    department: "-",
    funded: "-"
  }

  constructor(
    private jobPositionDetailsProvider: JobPositionDetailsProvider
  ) { }

  ngOnInit(): void {
    this.getJobPositionDetailsSummaryData();
  }

  getJobPositionDetailsSummaryData(): void {
    this.jobPositionDetailsProvider.getSummaryOfJobPositionDetails().then(summaryData => {
      this.summaryData = { ...summaryData };
    })
  }

}
