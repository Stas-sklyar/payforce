import { Component, OnInit } from '@angular/core';
import { JobPositionDetailsProvider } from 'src/app/providers/job-position-details.provider';

export interface IAdventagesTableItem {
  type: string;
  category?: string;
  budget_allowance: number;
}

@Component({
  selector: 'app-job-position-details-advantages',
  templateUrl: './job-position-details-advantages.component.html',
  providers: [JobPositionDetailsProvider],
  styleUrls: ['./job-position-details-advantages.component.scss']
})
export class JobPositionDetailsAdvantagesComponent implements OnInit {
  advantagesTableColumnsNames: string[] = ["Type", "Category", "Budget Allowance"];
  advantagesTableData: IAdventagesTableItem[] = [];

  constructor(
    private jobPositionDetailsProvider: JobPositionDetailsProvider
  ) { }

  ngOnInit(): void {
    this.getAdvantagesTableData();
  }

  getAdvantagesTableData(): void {
    this.jobPositionDetailsProvider.getAdvantagesTableData().then(advantagesTableData => {
      this.advantagesTableData = [...advantagesTableData];
    })
  }

}
