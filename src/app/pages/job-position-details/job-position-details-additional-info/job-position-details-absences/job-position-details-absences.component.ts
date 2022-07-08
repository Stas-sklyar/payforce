import { Component, OnInit } from '@angular/core';
import { JobPositionDetailsProvider } from 'src/app/providers/job-position-details.provider';

export interface IAbsencesTableItem {
  date: string;
  days: number;
  type: string;
  people: string;
}

@Component({
  selector: 'app-job-position-details-absences',
  templateUrl: './job-position-details-absences.component.html',
  providers: [JobPositionDetailsProvider],
  styleUrls: ['./job-position-details-absences.component.scss']
})
export class JobPositionDetailsAbsencesComponent implements OnInit {
  absencesTableColumnsNames: string[] = ["Date", "Days", "Type", "People"];
  absencesTableData: IAbsencesTableItem[] = [];

  constructor(
    private jobPositionDetailsProvider: JobPositionDetailsProvider
  ) { }

  ngOnInit(): void {
    this.getAbsencesTableData();
  }

  getAbsencesTableData(): void {
    this.jobPositionDetailsProvider.getAbsencesTableData().then(absencesTableData => {
      this.absencesTableData = [...absencesTableData];
    })
  }

}
