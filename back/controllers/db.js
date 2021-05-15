const DB = require('../staticDB/incidents.json');

module.exports ={
    getIncidents:()=>{
        return DB;
    },
    getIncidentById:(id)=>{
        id = Number(id);
        const {incidents} = DB;
        return incidents.find(incident=>incident.id === id);
    }
}
