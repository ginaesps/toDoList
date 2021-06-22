const express = require('express');
const route = express.Router();
const ControllrerHome = require('../Controller/home');

route.get('/', ControllrerHome.home);

route.post('/add', ControllrerHome.add);

route.put('/completar/:id', ControllrerHome.completar);

route.delete('/delete/:id', ControllrerHome.delete);

module.exports = route;