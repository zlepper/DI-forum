const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const subforum = require('./subforum');

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use(cors());

subforum.subforumHandler(app);

app.listen(port, () => console.log(`App listening to port ${port}!`));


