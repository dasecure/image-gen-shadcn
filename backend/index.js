import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
