import { Component, OnInit } from '@angular/core';
import { BusinessUnitDetailsProvider } from 'src/app/providers/business-unit-details.provider';

export interface ISummaryOfBusinessUnitDetails {
  totalCost: {
    actual: number;
    AOP: number;
  },

  headCount: {
    averageOnPeriod: {
      actual: number;
      AOP: number;
    },

    endOfPeriod: {
      actual: number;
      AOP: number;
    }
  }
};

@Component({
  selector: 'app-business-unit-details-summary',
  templateUrl: './business-unit-details-summary.component.html',
  providers: [BusinessUnitDetailsProvider],
  styleUrls: ['./business-unit-details-summary.component.scss']
})
export class BusinessUnitDetailsSummaryComponent implements OnInit {
  businessUnitDetailsSummary: ISummaryOfBusinessUnitDetails;

  constructor(
    private businessUnitDetailsProvider: BusinessUnitDetailsProvider
  ) {
    this.businessUnitDetailsSummary = {
      totalCost: {
        actual: 0,
        AOP: 0,
      },
    
      headCount: {
        averageOnPeriod: {
          actual: 0,
          AOP: 0,
        },
    
        endOfPeriod: {
          actual: 0,
          AOP: 0,
        }
      }
    };
  }

  ngOnInit(): void {
    this.getSummaryOfBusinessUnitDetails();
  }

  getSummaryOfBusinessUnitDetails(): void {
    this.businessUnitDetailsProvider.getSummaryOfBusinessUnitDetails().then((summaryOfBusinessUnitDetails) => {
      this.businessUnitDetailsSummary = { ...summaryOfBusinessUnitDetails };
    })
  }

}
