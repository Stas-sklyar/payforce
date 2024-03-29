import { Injectable } from '@angular/core';
import { IAbsencesTableItem } from '../pages/job-position-details/job-position-details-additional-info/job-position-details-absences/job-position-details-absences.component';
import { IAdventagesTableItem } from '../pages/job-position-details/job-position-details-additional-info/job-position-details-advantages/job-position-details-advantages.component';
import { IPeopleTableItem } from '../pages/job-position-details/job-position-details-additional-info/job-position-details-people/job-position-details-people.component';
import { ISummaryOfJobPositionDetails } from '../pages/job-position-details/job-position-details-summary/job-position-details-summary.component';
import { IJobPositionDetailsTableItem } from '../pages/job-position-details/job-position-details-table/job-position-details-table.component';

@Injectable()
export class JobPositionDetailsProvider {
    summaryOfJobPositionDetails: ISummaryOfJobPositionDetails = {
        current_attribution: "-",
        contract: {
            type: "-",
            hours: 0
        },
        remaining_paid_vacations: 0,
        manager: "-",
        department: "-",
        funded: "-"
    };
    jobPositionDetailsTableData: IJobPositionDetailsTableItem[] = [];
    absencesTableData: IAbsencesTableItem[] = [];
    advantagesTableData: IAdventagesTableItem[] = [];
    peopleTableData: IPeopleTableItem[] = [];

    constructor() {
    }

    getSummaryOfJobPositionDetails(): Promise<ISummaryOfJobPositionDetails> {
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
            this.summaryOfJobPositionDetails = {
                current_attribution: "Marina Fox",
                contract: {
                    type: "CDI",
                    hours: 35
                },
                remaining_paid_vacations: 20,
                manager: "François Maignant",
                department: "Advanced Solutions",
                funded: "Vendor"
            }

            resolve(this.summaryOfJobPositionDetails);

        })
    }

    getJobPositionsTableData(): Promise<IJobPositionDetailsTableItem[]> {

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
            this.jobPositionDetailsTableData = [
                {
                    month: "01/2023",
                    gross_salary: 50000,
                    actual_cost: 5000,
                    AOP_cost: 6500,
                    cost_variance: 1500,
                    actual_HC: 1,
                    AOP_HC: 1,
                    HC_variance: 1,
                    current_attribution: "Marina Fox"
                },
                {
                    month: "02/2023",
                    gross_salary: 50000,
                    actual_cost: 5000,
                    AOP_cost: 6500,
                    cost_variance: -2500,
                    actual_HC: 1,
                    AOP_HC: 1,
                    HC_variance: -2,
                    current_attribution: "Marina Fox"
                },
                {
                    month: "03/2023",
                    gross_salary: 50000,
                    actual_cost: 5000,
                    AOP_cost: 6500,
                    actual_HC: 1,
                    AOP_HC: 1,
                    current_attribution: "Marina Fox"
                }
            ]

            resolve(this.jobPositionDetailsTableData);

        })
    }

    getAbsencesTableData(): Promise<IAbsencesTableItem[]> {
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
            this.absencesTableData = [
                {
                    date: "20/06/2021",
                    days: 15,
                    type: "vacation",
                    people: "Catherine Brigitte"
                },
                {
                    date: "30/09/2021",
                    days: 5,
                    type: "sick_leave",
                    people: "Catherine Brigitte"
                },
                {
                    date: "24/04/2020",
                    days: 10,
                    type: "vacation",
                    people: "Lilian Tavernier"
                }
            ]

            resolve(this.absencesTableData);

        })
    }

    getAdvantagesTableData(): Promise<IAdventagesTableItem[]> {
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
            this.advantagesTableData = [
                {
                    type: "car",
                    category: "Category 1",
                    budget_allowance: 35000
                },
                {
                    type: "telephone",
                    budget_allowance: 300
                }
            ]

            resolve(this.advantagesTableData);

        })
    }

    getPeopleTableData(): Promise<IPeopleTableItem[]> {
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
            this.peopleTableData = [
                {
                    arrival_date: "20/06/2019",
                    leaving_date: "03/02/2022",
                    people: "Catherine Brigitte"
                },
                {
                    arrival_date: "16/04/2018",
                    leaving_date: "13/03/2022",
                    people: "Lilian Tavernier"
                },
                {
                    arrival_date: "03/09/2016",
                    leaving_date: "02/04/2028",
                    people: "Ivan Ternaux"
                }
            ]

            resolve(this.peopleTableData);
        })
    }

}
