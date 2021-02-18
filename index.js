import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

//This is the get route
app.get('/', (req, res) => {
  res.send('Hello from Home page');
});

app.listen(PORT, () => {
  console.log(`Server Running on port: http://localhost:${PORT}`);
});
