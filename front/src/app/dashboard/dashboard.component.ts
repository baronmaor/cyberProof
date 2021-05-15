import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { IrIncident } from '../interfaces/incident';
import { incDefinitions } from '../consts/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  incidents: IrIncident[];
  selectedIncident: IrIncident;
  definitions = incDefinitions;
  model: number;

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getIncidents();
  }
  getIncidents(){
    this.apiService.getIncidents().subscribe((res) => {
      this.incidents = res.data;
      this.model = this.incidents[0].id;
      this.setIncident();

    }, error => {console.log( error ); } );
  }

  setIncident(){
    this.selectedIncident = this.incidents.find(inc => inc.id === Number(this.model));
  }
  getModelDef(type: string , value: string){
    const values = [];
    return values.concat(value, this.definitions[type].filter(d => d !== value));
  }
  onEntityChange(){
    // this.apiService.updateIncident()
  }
}
