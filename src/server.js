if( process.env.NODE_ENV !== "production" ){
    require("dotenv").config();
}

const express = require('express');
const app = express();

app.listen( process.env.PORT, ()=>console.log(`Server Listening on PORT ${process.env.PORT}.`));