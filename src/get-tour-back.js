require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use('/subscriptions', require('./routes/subscriptions'));
app.use('/chat-subscriptions', require('./routes/chat-subscriptions'));

app.listen(PORT, () => {
    console.log(`server is runnig in PORT: ${PORT}`);
})
