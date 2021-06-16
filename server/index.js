require('dotenv').config()
const express = require("express");
const loginroutes = require('./routes/loginroutes');
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allow cross origin requests
app.use(cors());

// test
app.get('/', (req, res) => {
    res.json({ message: 'welcome to our upload module apis' });
});


app.post('/register', loginroutes.register);
app.post('/login', loginroutes.login);


app.listen(process.env.PORT, () => {
    console.log('Server started  ');
});