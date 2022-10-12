const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1); // Detener la app
    }
};

module.exports = conectarDB;