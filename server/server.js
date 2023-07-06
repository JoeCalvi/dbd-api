const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Perk = require('./models/Perk'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_STRING);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(port);

console.log(`server started on port:${port}`);