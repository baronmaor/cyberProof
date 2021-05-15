const DB = require('../staticDB/incidents.json');

module.exports ={
    getIncidents:()=>{
        return DB;
    }
}
