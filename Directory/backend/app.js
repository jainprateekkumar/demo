const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const List = require('./database/models/list');
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/lists', (req, res) => {
    List.find({})
        .then(lists => res.send(lists))
        .catch((error) => res.send(error));
});

app.post('/lists', (req, res) => { 
    (new List({ email: req.body.email, firstname: req.body.firstname, lastname: req.body.lastname })).save()
        .then(lists => res.send(lists))
        .catch((error) => res.send(error));
});

app.get('/lists/:listId', (req, res) => { 
    List.find({ _id: req.params.listId })
        .then(lists => res.send(lists))
        .catch((error) => res.send(error));
});

app.patch('/lists/:listId', (req, res) => { 
    List.findOneAndUpdate({ _id: req.params.listId }, {$set: req.body})
        .then(lists => res.send(lists))
        .catch((error) => res.send(error));
});

app.delete('/lists/:listId', (req, res) => { 
    List.findByIdAndDelete({ _id: req.params.listId })
        .then(lists => res.send(lists))
        .catch((error) => res.send(error));
});

app.listen(3000, () => {
    console.log("server is connected on 3000");
});