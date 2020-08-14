const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// dotenv config
require('dotenv').config();

// Passport config
require('./config/passport')(passport);


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

// Express session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Logging
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}



// Routes
app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));



// Server started
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));