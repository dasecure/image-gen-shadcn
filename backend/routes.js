import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

export default router;
