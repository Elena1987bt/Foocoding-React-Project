require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allow cross origin requests
app.use(cors());

app.use('/', authRouter);

mongoose
  .connect(process.env.DATABASE_MDB)
  .then((con) => console.log('Database connected...'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
