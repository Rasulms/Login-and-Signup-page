const express = require('express')
const app = express();
const PORT = 4000;
const path = require('path')
const cors = require('cors')
const corsOption = require('./Config/cors')
const mongoose = require('mongoose')

//cors
app.use(cors(corsOption))

main().then(() => { console.log('connected to db') }).catch(err => console.log(err.message));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// const p = path.join(__dirname, 'public', 'css')
app.use('/', express.static(path.join(__dirname, '/public')))


app.use('/', require('./Routes/root'))

// creating db,collection and insert data

async function main() {
    app.listen(PORT, () => {
        console.log('Server started successfully at PORT : ', PORT);
        // console.log(p);

    })
    await mongoose.connect('mongodb://127.0.0.1:27017/User-db');


}


