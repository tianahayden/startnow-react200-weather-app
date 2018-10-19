const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req,res) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + req.query.value + '&units=imperial&appid=d8fadaab406543e52430e9937ed1c828')
        .then(response => {
            res.send(response.data);
        });
});

module.exports = app;
