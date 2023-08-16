const DbConnection = require('./dbConfig');
const { createServer } = require('http');
const cors = require('cors');

const express = require('express'),
    app = express(),
    port = process.env.PORT || '3000',
    mongoose = require('mongoose'),
    Perk = require('./models/Perk'),
    Survivor = require('./models/Survivor'),
    Killer = require('./models/Killer'),
    Weapon = require('./models/Weapon'),
    Realm = require('./models/Realm'),
    Map = require('./models/Map'),
    Power = require('./models/Power'),
    Chapter = require('./models/Chapter'),
    StatusEffect = require('./models/StatusEffect'),
    bodyParser = require('body-parser');

const httpServer = createServer(app);

mongoose.Promise = global.Promise;
DbConnection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const allowedOrigins = [];

app.use(cors({
    origin: allowedOrigins
}));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
});

const perkRoutes = require('./routes/PerksRoutes');
const survivorRoutes = require('./routes/SurvivorsRoutes');
const killerRoutes = require('./routes/KillerRoutes');
const weaponRoutes = require('./routes/WeaponRoutes');
const realmRoutes = require('./routes/RealmRoutes');
const mapRoutes = require('./routes/MapRoutes');
const powerRoutes = require('./routes/PowerRoutes');
const chapterRoutes = require('./routes/ChapterRoutes');
const statusEffectRoutes = require('./routes/StatusEffectRoutes');
perkRoutes(app);
survivorRoutes(app);
killerRoutes(app);
weaponRoutes(app);
realmRoutes(app);
mapRoutes(app);
powerRoutes(app);
chapterRoutes(app);
statusEffectRoutes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


httpServer.listen(port, () => {
    console.log(`[SERVING ON PORT: ${port}]`)
})