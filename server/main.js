//Importations
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

//Configs
require('dotenv').config();
app.use(cors({
    origin: "http://localhost:3113"
}));
app.use(helmet());

//MongoDB Setup
mongoose.connect(process.env.DB_STRING,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB !'))
  .catch(() => console.log('Failed to connect to MongoDB !'));

//MiddleWares



//Setting up routes
const routes = require('./routes/routes');
app.use('/', routes);





//Launching api
const port = process.env.PORT || 2112;
app.listen(port, () =>{
    console.log('Listening to http://localhost:'+port);
});




