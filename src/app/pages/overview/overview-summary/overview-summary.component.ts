import { Component, OnInit } from '@angular/core';
import { OverviewProvider } from 'src/app/providers/overview.provider';

export interface IOverviewSummary {
  headCount: {
    averageOnPeriod: {
      actual: number;
      AOP: number;
    },

    endOfPeriod: {
      actual: number;
      AOP: number;
    }
  },

  totalCost: {
    actual: number;
    AOP: number;
  }
};

@Component({
  selector: 'app-overview-summary',
  templateUrl: './overview-summary.component.html',
  providers: [OverviewProvider],
  styleUrls: ['./overview-summary.component.scss']
})

export class OverviewSummaryComponent implements OnInit {
  overviewSummary: IOverviewSummary;

  constructor(
    private overviewProvider: OverviewProvider
  ) {
    this.overviewSummary = {
      headCount: {
        averageOnPeriod: {
          actual: 0,
          AOP: 0
        },

        endOfPeriod: {
          actual: 0,
          AOP: 0
        }
      },

      totalCost: {
        actual: 0,
        AOP: 0
      }
    };
  }

  ngOnInit(): void {
    this.getOverviewSummaryData();
  }

  getOverviewSummaryData(): void {
    this.overviewProvider.getOverviewSummary().then((overviewSummaryData) => {
      this.overviewSummary = { ...overviewSummaryData };
    })
  }

}
