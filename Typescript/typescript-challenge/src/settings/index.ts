import express, { Express } from 'express';
import dotenv from 'dotenv';
import statusRouter from '../routes/statusRouter';
import quizRouter from '../routes/quizRouter';
import connectToMongo from '../mongoose.config';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use('/api/status', statusRouter);
app.use('/api/', quizRouter);

connectToMongo().then(() => {
  console.log(`[${new Date().toLocaleString()}] Connected to MongoDB`);
});

app.listen(port, () => {
  console.log(`[${new Date().toLocaleString()}] Server running on port ${port}`);
});



