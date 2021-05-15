const db = require('../controllers/db');


module.exports= {
    getIncidents:async (req,res,next)=>{
        try{
            const incidentsObj = await db.getIncidents().incidents;
            res.status('200').send({data:incidentsObj});
        }catch (e) {
            res.status('500').send({msg:e});
        }
    }
}
