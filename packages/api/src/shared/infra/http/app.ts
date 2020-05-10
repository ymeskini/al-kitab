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
app.use(morgan('dev'));

app.use('/api/v1', v1Router);
app.get('*', (_, res) => res.sendStatus(403));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
});
