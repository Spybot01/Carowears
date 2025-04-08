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
app.post('/submit', (req,res)=>{
    console.log(req.body);
    if (req.body) {
        res.status(201).json({message :'form submitted successfully'})
    } else {
        res.status(401).json({message:'form not submitted'})
    }
    
})
app.listen(port, ()=>{`Server is running on port ${port}`})
console.log(`Server is running on port ${port}`);

