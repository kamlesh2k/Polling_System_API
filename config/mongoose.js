const mongoose = require('mongoose');

// Connect to the MongoDB database using mongoose.connect() method and specify the database URL and options
mongoose.connect('mongodb+srv://kamleshbhojane18:wPZR7PtgedWi5Fq8@cluster0.hllk1y1.mongodb.net/polling_system_db', 
{ 
useNewUrlParser: true,
useUnifiedTopology: true,
}
);

// mongoose.connect('mongodb://127.0.0.1:27017/polling_system_db');

// Store the default connection in a variable named db
const db = mongoose.connection;

// Listen for any errors that may occur in the database connection and log them to the console
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print the message
db.once('open',function(){
  console.log('Successfully connected to the database');
});

// Export the db object for use in other files
module.exports = db;