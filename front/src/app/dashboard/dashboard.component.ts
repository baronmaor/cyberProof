import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { IrIncident } from '../interfaces/incident';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  incidents: IrIncident[];
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getIncidents();
  }
  getIncidents(){
    this.apiService.getIncidents().subscribe((res) => {
      this.incidents = res.data;
    }, error => {console.log( error ); } );
  }
}
