const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 3000;
const URL = "mongodb+srv://root:root@cluster0.mrwmyqg.mongodb.net/?retryWrites=true&w=majority";


const authRouter = require('./routes/authRouter');
const protocolRouter = require('./routes/protocolRouter');
const meetingRouter = require('./routes/meetingRouter');
const authMiddleware = require('./middlewares/authMiddleware');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/auth', authRouter);
app.use('/protocols', protocolRouter);
app.use('/meetings', meetingRouter);
app.get('/', authMiddleware, (req, res) => res.json(req.user));

const start = async() => {
    try {
        await mongoose.connect(URL);
        app.listen(PORT, () => console.log("server started"));
    } 
    catch (e) 
    {
        console.log(e);
    }
}

start();