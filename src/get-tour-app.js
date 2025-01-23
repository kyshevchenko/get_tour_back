require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan('dev'));

const PORT = process.env.PORT;

// app.use('/users', require('./routes/users'));
app.use('/subscriptions', require('./routes/subscriptions'));
// app.use('/chatsubscriptions', require('./routes/chatsubscriptions'));

app.listen(PORT, () => {
    console.log(`server is runnig in PORT: ${PORT}`);
})
