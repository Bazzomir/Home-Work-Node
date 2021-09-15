const express = require('express');
const app = express();
let countries = require('./data');

app.use(express.json());

app
    .get('/countries', (req, res) => {
        res.send(countries);
    })
    .get('/countries/:id', (req, res) => {
        let country = countries.find(country => country.id == req.params.id);
        res.send(country);
    })
    .post('/countries', (req, res) => {
        countries.push(req.body);
        res.send(countries);
    })
    .delete('/countries/:id', (req, res) => {
        const filterCountries = countries.filter(country => country.id != req.params.id);
        countries = filterCountries;
        res.send(countries);
    })
    .patch('/countries/:id', (req, res) => {
        countries.forEach(country => {
            if (country.id == req.params.id) {
                if (req.body.name) {
                    country.name = req.body.name;
                }
                if (req.body.population) {
                    country.population = req.body.population;
                }
            }
        });
        res.send(countries);
    })
    .put('/countries/:id', (res,req) => {
        res.send('this is an update');
    });

app.listen('3003', () => {
    console.log('Loading...')
});