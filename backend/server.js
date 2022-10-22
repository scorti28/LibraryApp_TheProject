const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const userRoutes = require('./routes/api/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
 
//Bodyparser Middleware
app.use(bodyParser.json());

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