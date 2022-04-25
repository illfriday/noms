const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const itemRouter = require('./routes/itemRouter');

const app = express();
const apiPort = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Help World!')
});

app.use('/api', itemRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));