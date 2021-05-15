
const token = true;
module.exports = {
    isTokenValid: async(req,res,next)=>{
       return token ? next() : res.status('401').send('Unauthorized')
    }
}
