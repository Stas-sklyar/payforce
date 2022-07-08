import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    public pageTitle$ = new Subject<string>();

    public setCurrentTitle(title: string) {
        this.pageTitle$.next(title);
    }

}