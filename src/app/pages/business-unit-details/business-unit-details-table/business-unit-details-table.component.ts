import { Component, OnInit } from '@angular/core';
import { NzTableSortOrder, NzTableSortFn, NzTableFilterList, NzTableFilterFn } from 'ng-zorro-antd/table';
import { BusinessUnitDetailsProvider } from 'src/app/providers/business-unit-details.provider';
import { IOverviewTableItem } from '../../overview/overview-table/overview-table.component';

export interface ITableItemForJobPosition {
  status: string;
  id_job: string;
  job_position: string;
  people?: string;
  GCL: number;
  contrat: string;
  funded?: string;
  actual_cost?: number;
  AOP_cost?: number;
  cost_variance?: number;
  actual_HC?: number;
  AOP_HC?: number;
  HC_variance: number;
}

interface IJobPositionsTableColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<IOverviewTableItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<IOverviewTableItem> | null;
}

@Component({
  selector: 'app-business-unit-details-table',
  templateUrl: './business-unit-details-table.component.html',
  providers: [BusinessUnitDetailsProvider],
  styleUrls: ['./business-unit-details-table.component.scss']
})
export class BusinessUnitDetailsTableComponent implements OnInit {
  listOfJobPositionsTableColumns: IJobPositionsTableColumnItem[] = [
    {
      name: 'Status',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'ID Job',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Job Position',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'People',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'GCL',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Contrat',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Funded',
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
      name: 'Action',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    }
  ];
  jobPositions: ITableItemForJobPosition[] = [];

  selectedIndexOfRow: number = -1;

  modalForMergeIsVisible: boolean = false;
  jobPositionIdForMerge: string = ""

  constructor(
    private businessUnitDetailsProvider: BusinessUnitDetailsProvider
  ) { }

  ngOnInit(): void {
    this.getJobPositionsTableData();
  }

  getJobPositionsTableData(): void {
    this.businessUnitDetailsProvider.getJobPositionsTableData().then((jobPositions) => {
      this.jobPositions = [...jobPositions];
    })
  }

  openActionsMenu(i: number): void {
    this.selectedIndexOfRow = i;
  }

  hideActionsMenu(): void {
    this.selectedIndexOfRow = -1;
  }

  showModalForMerge(jobPositionId: string): void {
    this.modalForMergeIsVisible = true;
    this.jobPositionIdForMerge = jobPositionId;
  }

  closeModalForMerge(): void {
    this.modalForMergeIsVisible = false;
  }

}
