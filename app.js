
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

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json(users[+id]);
});

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`server has started on PORT ${PORT} `);
});
