const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.text());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.listen(8080, function () {
    console.log('http://localhost:8080/');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/article', async (req, res) => {
    const formdata = new FormData();
    formdata.append("key", `${process.env.API_KEY}`);
    formdata.append("txt", req.body);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
   
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => ({
        status: response.status,
        body: response.json()
            .then(function(body) {
                console.log(body);
                res.send(body);
            })
            .catch(err => console.log(err))
    }))
    .catch(  err => console.log(err))    
});

