const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Perk = require('./models/Perk'),
    bodyParser = require('body-parser');



app.listen(port);

console.log(`server started on port:${port}`);