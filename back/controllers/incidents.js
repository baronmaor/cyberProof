const db = require('../controllers/db');


module.exports= {
    getIncidents:async (req,res,next)=>{
        try{
            const incidentsObj = await db.getIncidents().incidents;
            res.status('200').send({data:incidentsObj});
        }catch (e) {
            res.status('500').send({msg:e});
        }
    },
    getIncident:async (req,res,next)=>{
        const {id} = req.params;
        if (!Number(id)){
            return res.status('400').send({msg:'Bad request'})
        }
        try {
            const incidentObj = await db.getIncidentById(id);
            res.status('200').send({data: incidentObj});
        }catch(e){
            res.status('500').send({msg:e});
        }
    }
}
