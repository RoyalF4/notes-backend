import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import infoRouter from './routes/info';
import personsRouter from './routes/persons';
import logger from './middleware/logger';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(logger());

app.use('/info', infoRouter);
app.use('/api/persons', personsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
