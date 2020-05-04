import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { v1Router } from './api/v1';

const origin = {
  origin: '*',
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors(origin));
app.use(morgan('tiny'));

app.use('/api/v1', v1Router);

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:${4000}`);
});
