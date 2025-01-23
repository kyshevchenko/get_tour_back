require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan('dev'));

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`server is runnig in PORT: ${PORT}`);
    console.log(`DATABASE: ${process.env.DATABASE}`);

})
