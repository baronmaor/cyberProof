import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { API } from './utils/API';
import {ReplaySubject} from 'rxjs';
import { IrIncident } from './interfaces/incident';


@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  incidentsObserved$: ReplaySubject<any>;
  incidents: IrIncident[];
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    public http: HttpClient
  ) { }

  public getIncidents() {
    return (this.incidentsObserved$ = this.incidentsObserved$ || this._createIncidentsObserved());
  }


  _createIncidentsObserved(){
    const subject = new ReplaySubject(1);
    this.emitIncidentsObserve();
    return subject;
  }


  private emitIncidentsObserve() {
    return this.http.get<{}>(API['get-incidents'], { headers: this.headers })
      .subscribe((data: any) => {
        this.incidents = data;
        this.incidentsObserved$.next(this.incidents);
      });
  }
}
