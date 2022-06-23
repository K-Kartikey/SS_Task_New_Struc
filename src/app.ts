import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(router);

export default app;
