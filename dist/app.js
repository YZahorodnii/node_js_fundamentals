"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const path = require('path');
const fs = require('fs');
const newUser = {
    name: 'Zoya',
    age: 60,
    gender: 'female'
};
app.post('/users', (req, res) => {
    const data = fs.readFileSync('base.json', { encoding: "utf-8" });
    const base = JSON.parse(data);
    const newUser = req.body;
    if (newUser.name.length > 3 && newUser.age > 0) {
        base.push(req.body);
        fs.writeFileSync('base.json', JSON.stringify(base), err => {
            if (err)
                throw err;
        });
        res.status(200).json({
            message: 'added new user'
        });
    }
    else {
        res.status(400).json({
            message: 'name of the user cannot be less than 3 words and age have to be more than 0'
        });
    }
});
app.get('/users', (req, res) => {
    const data = fs.readFileSync('base.json', { encoding: "utf-8" });
    const base = JSON.parse(data);
    res.json(base);
});
app.delete('/users/:id', (req, res) => {
    const data = fs.readFileSync('base.json', { encoding: "utf-8" });
    const base = JSON.parse(data);
    let { id } = req.params;
    if (base[+id]) {
        base.splice(+id, 1);
        res.status(200).json({
            message: 'Deleted user successfully',
            userDeleted: base[+id]
        });
        fs.writeFileSync('base.json', JSON.stringify(base), err => {
            if (err)
                throw err;
        });
    }
    else {
        res.status(404).json({
            message: 'Cant find user with this id'
        });
    }
});
app.put('/users/:id', (req, res) => {
    const data = fs.readFileSync('base.json', { encoding: "utf-8" });
    const base = JSON.parse(data);
    const { id } = req.params;
    if (base[+id]) {
        base[+id] = req.body;
        res.status(200).json({
            message: 'Updated user successfully',
            userUpdated: base[+id]
        });
        fs.writeFileSync('base.json', JSON.stringify(base), err => {
            if (err)
                throw err;
        });
    }
    else {
        res.status(404).json({
            message: 'Cant find user with this id'
        });
    }
});
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`server has started on PORT ${PORT} `);
});
