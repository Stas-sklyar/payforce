import { Injectable } from '@angular/core';
import { IOverviewSummary } from '../pages/overview/overview-summary/overview-summary.component';
import { IOverviewTableItem } from '../pages/overview/overview-table/overview-table.component';

@Injectable()
export class OverviewProvider {
  overviewSummary: IOverviewSummary;
  businessUnits: IOverviewTableItem[];

  constructor() {
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
    this.businessUnits = [];
  }

  getOverviewSummary(): Promise<IOverviewSummary> {
    return new Promise(resolve => {

      // API request 1
      // this.vacanciesService.getVacancies()
      //   .subscribe((response: ISomeModelFromAPIForSummary[]) => {

      //     // API request 2
      //     this.vacanciesService.getVacancies()
      //       .subscribe((response: ISomeModelFromAPIForSummary[]) => {

      //         // calculations...

      //       });

      //   });


      // transformation
      this.overviewSummary = {
        headCount: {
          averageOnPeriod: {
            actual: 62,
            AOP: 64
          },
      
          endOfPeriod: {
            actual: 65,
            AOP: 69
          }
        },
      
        totalCost: {
          actual: 2.7,
          AOP: 3.0
        }
      }

      resolve(this.overviewSummary);

    })
  }

  getTableData(): Promise<IOverviewTableItem[]> {

    return new Promise(resolve => {

      // API request 1
      // this.vacanciesService.getVacancies()
      //   .subscribe((response: ISomeModelFromAPIForTable[]) => {

      //     // API request 2
      //     this.vacanciesService.getVacancies()
      //       .subscribe((response: ISomeModelFromAPIForTable[]) => {

      //         // calculations...

      //       });

      //   });


      // transformation
      this.businessUnits = [
        {
          id: 1,
          bu_name: "Business Unit 1",
          director_name: "Martin Robert",
          actual_cost: 133000,
          AOP_cost: 127000,
          cost_variance: 4.7,
          actual_HC: 59,
          AOP_HC: 57,
          HC_variance: 2
        },
        {
          id: 2,
          bu_name: "Business Unit 2",
          director_name: "Martin Robert",
          actual_cost: 133000,
          AOP_cost: 127000,
          cost_variance: -4.7,
          actual_HC: 59,
          AOP_HC: 57,
          HC_variance: -2
        },
        {
          id: 3,
          bu_name: "Business Unit 3",
          director_name: "Martin Robert",
          actual_cost: 133000,
          AOP_cost: 127000,
          cost_variance: 4.7,
          actual_HC: 59,
          AOP_HC: 57,
          HC_variance: 2
        },
        {
          id: 4,
          bu_name: "Business Unit 4",
          director_name: "Martin Robert",
          actual_cost: 133000,
          AOP_cost: 127000,
          cost_variance: -4.7,
          actual_HC: 59,
          AOP_HC: 57,
          HC_variance: -2
        },

      ]

      resolve(this.businessUnits);

    })
  }

}
