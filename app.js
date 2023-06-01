
// const events = require('events');
// const eventEmitter = new events()
//
// eventEmitter.on('click', ()=> {
//     console.log('Event was clicked');
// })
//
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
//
//
// eventEmitter.once('Clicked and died event', ()=> {
//     console.log('Clicked and died event');
// });
//
//
// eventEmitter.emit('Clicked and died event');
// eventEmitter.emit('Clicked and died event');
// eventEmitter.emit('Clicked and died event');
// eventEmitter.emit('Clicked and died event');
// eventEmitter.emit('Clicked and died event');



// const fs = require('fs');
// const path = require('path');
//
// const readStream = fs.createReadStream('file.txt', {highWaterMark: 20 * 1024});
// const writeStream = fs.createWriteStream('file2.txt');
// readStream.on('data', (chunk) => {
//     console.log(chunk);
// })
//
// readStream
//     .on('error', (err) => {
//         readStream.destroy();
//         writeStream.end('Failed to read file')
//     })
//     .pipe(writeStream)

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const users = [
    {
        name: 'Oleh',
        age:2,
        gender: 'male'
    },
    {
        name: 'Olya',
        age:2,
        gender: 'female'
    },
    {
        name: 'Denis',
        age:2,
        gender: 'male'
    },
    {
        name: 'Kulya',
        age:2,
        gender: 'female'
    }
]

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json(users[+id]);
});

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json({
        message: 'user created'
    })
})

app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    users[+id] = req.body
    res.status(200).json({
        message: 'user updated',
        data: users[+id]
    })
});

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    users.splice(+id, 1);
    res.status(200).json({
        message: 'user deleted',
        data: users[+id]
    })
})

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`server has started on PORT ${PORT} `);
});
