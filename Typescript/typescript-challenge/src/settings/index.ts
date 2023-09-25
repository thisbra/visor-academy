import express, { Express } from 'express';
import dotenv from 'dotenv';
import statusRouter from '../routes/statusRouter';
import quizRouter from '../routes/quizRouter';
import connectToMongo from '../mongoose.config';
import bodyParser from 'body-parser';
import quizMachine from '../state/machine';
import { interpret } from 'xstate';
import logRequest from '../utils/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());

// middleware
app.use( (req, res, next) => {
    logRequest(req);
    next();
  }
)

app.use('/api/status', statusRouter);
app.use('/api/', quizRouter);

connectToMongo().then(() => {
  console.log(`[${new Date().toLocaleString()}] Connected to MongoDB`);
});


app.listen(port, () => {
  console.log(`[${new Date().toLocaleString()}] Server running on port ${port}`);
});

const machineService = interpret(quizMachine).start();
console.log(`[${new Date().toLocaleString()}] Quiz machine started`);

machineService.onTransition((state) => {
  console.log(`[${new Date().toLocaleString()}] CURRENT STATE: ${state.value}`);
});

process.on('exit', () => {
  machineService.stop();
});

export default machineService;



