import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import generateImageRoute from './routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.use('/api', generateImageRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});