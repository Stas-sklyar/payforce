import { Injectable } from '@angular/core';
import { ISummaryOfBusinessUnitDetails } from '../pages/business-unit-details/business-unit-details-summary/business-unit-details-summary.component';
import { ITableItemForJobPosition } from '../pages/business-unit-details/business-unit-details-table/business-unit-details-table.component';

export interface ISomeModelFromAPIForSummary {
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
}

@Injectable()
export class BusinessUnitDetailsProvider {
    summaryOfBusinessUnitDetails: ISummaryOfBusinessUnitDetails;
    jobPositions: ITableItemForJobPosition[];

    constructor() {
        this.summaryOfBusinessUnitDetails = {
            totalCost: {
                actual: 0,
                AOP: 0
            },

            headCount: {
                averageOnPeriod: {
                    actual: 0,
                    AOP: 0
                },

                endOfPeriod: {
                    actual: 0,
                    AOP: 0
                }
            }
        };
        this.jobPositions = [];
    }

    getSummaryOfBusinessUnitDetails(): Promise<ISummaryOfBusinessUnitDetails> {
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
            this.summaryOfBusinessUnitDetails = {
                totalCost: {
                    actual: 133,
                    AOP: 127
                },

                headCount: {
                    averageOnPeriod: {
                        actual: 12,
                        AOP: 15
                    },

                    endOfPeriod: {
                        actual: 13,
                        AOP: 17
                    }
                }
            }

            resolve(this.summaryOfBusinessUnitDetails);

        })
    }

    getJobPositionsTableData(): Promise<ITableItemForJobPosition[]> {

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
            this.jobPositions = [
                {
                    status: "Standard",
                    id_job: 1,
                    job_position: "Shift Manager",
                    people: "Marina Fox",
                    GCL: 4,
                    contrat: "CDI",
                    funded: "Marcom",
                    actual_cost: 8000,
                    AOP_cost: 5000,
                    cost_variance: 8000,
                    actual_HC: 1,
                    AOP_HC: 1,
                    HC_variance: 1
                },
                {
                    status: "Standard",
                    id_job: 2,
                    job_position: "Marketing Executive",
                    people: "Robert Dax",
                    GCL: 3,
                    contrat: "CDI",
                    funded: "Marcom",
                    actual_cost: 4000,
                    AOP_cost: 5000,
                    cost_variance: -1000,
                    actual_HC: 1,
                    AOP_HC: 1,
                    HC_variance: -1
                },
                {
                    status: "Standard",
                    id_job: 3,
                    job_position: "Marketing Executive",
                    GCL: 6,
                    contrat: "CDI",
                    HC_variance: -1
                }
            ]

            resolve(this.jobPositions);

        })
    }

}
