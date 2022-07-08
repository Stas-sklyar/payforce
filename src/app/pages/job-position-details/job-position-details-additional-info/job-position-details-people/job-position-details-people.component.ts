import { Component, OnInit } from '@angular/core';
import { JobPositionDetailsProvider } from 'src/app/providers/job-position-details.provider';

export interface IPeopleTableItem {
  arrival_date: string;
  leaving_date: string;
  people: string;
}

@Component({
  selector: 'app-job-position-details-people',
  templateUrl: './job-position-details-people.component.html',
  providers: [JobPositionDetailsProvider],
  styleUrls: ['./job-position-details-people.component.scss']
})
export class JobPositionDetailsPeopleComponent implements OnInit {
  peopleTableColumnsNames: string[] = ["Arrival Date", "Leaving Date", "People"];
  peopleTableData: IPeopleTableItem[] = [];

  constructor(
    private jobPositionDetailsProvider: JobPositionDetailsProvider
  ) { }

  ngOnInit(): void {
    this.getPeopleTableData();
  }

  getPeopleTableData(): void {
    this.jobPositionDetailsProvider.getPeopleTableData().then(peopleTableData => {
      this.peopleTableData = [...peopleTableData];
    })
  }

}
