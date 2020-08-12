const express = require('express');
const mongoose = require('mongoose');

// dotenv config
require('dotenv').config();

// App and Port initialization
const app = express();
const PORT = process.env.PORT || 5000;


// DB connection
const DBconnection = mongoose.connect(process.env.MONGO_URI, {
                                useNewUrlParser: true,
                                useUnifiedTopology: true,
                                useFindAndModify: false
                            })
                            .then((conn) => console.log(`MongoDB connected: ${conn.connection.host}`))
                            .catch(err => console.error(err));

// Server started
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));