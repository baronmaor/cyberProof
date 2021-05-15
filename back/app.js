require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const corsOptions = {
    origin: function (origin, callback) {
        if (process.env.WHITE_LIST_DOMAINS.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}



app.use(bodyParser.json());
app.use(cors(corsOptions));


app.listen(process.env.PORT, () => {
    require('./routes/routes')(app);
    console.log( `Started up at port ${process.env.PORT}`);
});
