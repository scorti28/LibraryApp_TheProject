const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const userRoutes = require('./routes/api/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

var cors = require("cors");

const app = express();
//const cors = require("cors");
app.use(cors());
app.use(express.json());
 
//Bodyparser Middleware
app.use(bodyParser.json());
//app.use(cors());


// DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//app.use(express.json());

// Use Routes
app.use('/api/items', items);

app.use('/api/users', userRoutes);

app.use(express.json());

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));