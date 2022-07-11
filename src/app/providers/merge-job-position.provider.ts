import { Injectable } from '@angular/core';
import { IElementOfJobPositionForMerge } from '../shared/modal-for-merge/modal-for-merge.component';

@Injectable()
export class MergeJobPositionProvider {
    jobPositionsList: IElementOfJobPositionForMerge[] = []

    constructor() {
    }

    getJobPositionsList(): Promise<IElementOfJobPositionForMerge[]> {
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
            this.jobPositionsList = [
                {
                    id: "1",
                    label: "Shift Manager"
                },
                {
                    id: "2",
                    label: "Marketing Executive"
                },
                {
                    id: "3",
                    label: "Solutions Architect"
                }
            ]

            resolve(this.jobPositionsList);
        })
    }

}
