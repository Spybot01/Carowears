// const { config, configDotenv } = require('dotenv');
const express = require ('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5300;
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use (bodyParser.urlencoded({extended: true}))
app.get('/api', (req , res )=>{
    res.send({name: 'femi'})
})
app.listen(port, ()=>{`Server is running on port ${port}`})
console.log(`Server is running on port ${port}`);

