import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISomeModelFromAPI } from '../providers/overview.provider';

@Injectable()
export class VacanciesService {
  url: string = "http://some-user.com/";

  constructor(private http: HttpClient) {
  }

  getVacancies(): Observable<ISomeModelFromAPI[]> {
    return this.http.get<ISomeModelFromAPI[]>(this.url + '/api/vacancies/');
  }

}
