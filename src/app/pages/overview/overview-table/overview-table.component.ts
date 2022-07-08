import { Component, OnInit } from '@angular/core';
import { NzTableSortOrder, NzTableSortFn, NzTableFilterList, NzTableFilterFn } from 'ng-zorro-antd/table';
import { OverviewProvider } from 'src/app/providers/overview.provider';

export interface IOverviewTableItem {
  id: number;
  bu_name: string;
  director_name: string;
  actual_cost: number;
  AOP_cost: number;
  cost_variance: number;
  actual_HC: number;
  AOP_HC: number;
  HC_variance: number;
}

interface IOverviewTableColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<IOverviewTableItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<IOverviewTableItem> | null;
}

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  providers: [OverviewProvider],
  styleUrls: ['./overview-table.component.scss']
})
export class OverviewTableComponent implements OnInit {
  listOfTableColumns: IOverviewTableColumnItem[] = [
    {
      name: 'BU Name',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Director Name',
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
  businessUnits: IOverviewTableItem[] = [];

  selectedIndexOfRow: number = -1;

  constructor(
    private overviewProvider: OverviewProvider
  ) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.overviewProvider.getTableData().then((tableData) => {
      this.businessUnits = [...tableData];
    })
  }

  openActionsMenu(i: number): void {
    this.selectedIndexOfRow = i;
  }

  hideActionsMenu(): void {
    this.selectedIndexOfRow = -1;
  }

}
