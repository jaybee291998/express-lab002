import 'dotenv/config'
import express from 'express'
import cors from 'cors';
// import config from './config';
import bodyParser from 'body-parser';
import models from './models';
import routes from './routes';

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json())
app.use((req, res, next) => {
    req.context = {
        models
    };

    next();
});
app.use((req, res, next) => {
    req.serverMessage = 'arue';
    next();
});


app.use('/', routes)

app.listen(3000, () => {
    console.log(process.env.ENVIRONMENT);
    console.log('Example app listening on port 3000!');
});
