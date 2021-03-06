const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoute = require('./routes/auth');
const miniblogRoute = require('./routes/miniblog');

dotenv.config();

const corsConfig = {
    credentials: true,
    origin: true,
};

//middlewares
app.use(express.json());
app.use(cors(corsConfig));

app.use('/api/user', authRoute);
app.use('/api/blog', miniblogRoute);

//Connect to DB
mongoose.connect(process.env.DBUrl,
    { useNewUrlParser: true },
    () => {
        console.log('Connected to DB!');
    }    
);

app.listen(3030);
