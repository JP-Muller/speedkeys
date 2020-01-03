require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express')
const massive = require('massive')
const session = require('express-session')

//require sockets
const socket = require('socket.io')
const ac = require('./controllers/authController')
const sc = require('./controllers/scoreController')
const initSession = require('./middleware/initSession')
const authCheck = require('./middleware/authCheck')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()

//used in the socket
const io = socket(app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`)))

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected')
})

app.use(initSession)

// Authentication Endpoints

app.post('/api/login', ac.login)
app.post('/api/signup', ac.register)
app.get('/api/user', authCheck, ac.getUser)
app.delete('/api/logout', ac.logout)
app.put('/api/edit/:user_id')
app.put('/api/editprofile_pic/:user_id')


//Sockets

io.on("connection", socket => {
    console.log("User Connected");

    socket.on('join room', async data => {
        let { lobby, lobbyName } = data
        const db = app.get('db');
        console.log("You just joined:", lobbyName);
        let messages = await db.get_players(lobby);
        // console.log('messages', messages);
        socket.join(lobby);
        io.to(lobby).emit('room joined', messages);

    })



    socket.on('disconnect', () => {
        console.log('Disconnected from room');
    });

})