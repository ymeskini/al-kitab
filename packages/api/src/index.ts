import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

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

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
});
