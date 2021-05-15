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
  model: IrIncident;
  definitions = incDefinitions;

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getIncidents();
  }
  getIncidents(){
    this.apiService.getIncidents().subscribe((res) => {
      this.incidents = res.data;
      this.setIncident(this.incidents[0]);
    }, error => {console.log( error ); } );
  }

  setIncident(incident){
    this.model = this.incidents.find(inc => inc.id === Number(incident));
  }
  getModelDef(type: string , value: string){
    const values = [];
    return values.concat(value, this.definitions[type].filter(d => d !== value));
  }
  onEntityChange(event, entity: string){
    this.model[entity] = event;
    // this.apiService.updateIncident()
  }
}
