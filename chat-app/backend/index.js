const express = require('express')        // express return function it self
const connectToMongo = require('./db');    
const cors = require('cors');

const app = express()
const port = 4099

app.use(cors());
app.use(express.json());

app.use('/auth',require('./routes/auth'));
app.use('/group',require('./routes/group'));


app.listen(port, () => {
    console.log(`Chat app listening at http://localhost:${port}`)
})

connectToMongo();