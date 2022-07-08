import { Component, OnInit } from '@angular/core';
import { NzTableSortOrder, NzTableSortFn, NzTableFilterList, NzTableFilterFn } from 'ng-zorro-antd/table';
import { JobPositionDetailsProvider } from 'src/app/providers/job-position-details.provider';

export interface IJobPositionDetailsTableItem {
  month: string;
  gross_salary: number;
  actual_cost: number;
  AOP_cost: number;
  cost_variance?: number;
  actual_HC: number;
  AOP_HC: number;
  HC_variance?: number;
  current_attribution: string;
}

interface IJobPositionDetailsTableColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<IJobPositionDetailsTableItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<IJobPositionDetailsTableItem> | null;
}

@Component({
  selector: 'app-job-position-details-table',
  templateUrl: './job-position-details-table.component.html',
  providers: [JobPositionDetailsProvider],
  styleUrls: ['./job-position-details-table.component.scss']
})
export class JobPositionDetailsTableComponent implements OnInit {
  listOfTableColumns: IJobPositionDetailsTableColumnItem[] = [
    {
      name: 'Month',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Gross Salary',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Actual Cost',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'AOP Cost',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Cost Variance',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Actual HC',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'AOP HC',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'HC Variance',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Current Attribution',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    }
  ];
  jobPositionDetailsTableData: IJobPositionDetailsTableItem[] = [];

  constructor(
    private jobPositionDetailsProvider: JobPositionDetailsProvider
  ) { }

  ngOnInit(): void {
    this.getJobPositionDetailsTableData();
  }

  getJobPositionDetailsTableData(): void {
    this.jobPositionDetailsProvider.getJobPositionsTableData().then(tableData => {
      this.jobPositionDetailsTableData = [...tableData];
    })
  }

}
