const incidentController = require('../controllers/incidents');
const { isTokenValid }= require('../services/security.service')


module.exports = (app) => {
    //Incidents
    app.get('/get-incidents',isTokenValid,incidentController.getIncidents);


}
