const DbConnection = require('./dbConfig');
const { createServer } = require('http')

const express = require('express');
app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
Perk = require('./models/Perk');
Survivor = require('./models/Survivor');
bodyParser = require('body-parser');

const httpServer = createServer(app);

mongoose.Promise = global.Promise;
DbConnection.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const perkRoutes = require('./routes/PerksRoutes');
const survivorRoutes = require('./routes/SurvivorsRoutes')
perkRoutes(app);
survivorRoutes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

httpServer.listen(port, () => {
    console.log(`[SERVING ON PORT: ${port}]`)
})