const express = require('express');
const bodyParser = require('body-parser');

require('./services/passport');
const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send({ hi: "there!"});
});

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);