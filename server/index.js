const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRouter = require('./routes/authRouter');

const app = express();
dotenv.config();

// Allow cross origin requests
app.use(express.json({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use('/', authRouter);

mongoose
  .connect(process.env.DATABASE_MDB)
  .then((con) => console.log('Database connected...'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
