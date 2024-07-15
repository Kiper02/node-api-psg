import express from 'express'
import 'dotenv/config'
import sequelize from './db/db.js';
import PersonService from './services/PersonService.js';

const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        await PersonService.getAll({force: true});
        app.listen(PORT, () => `Server started on PORT = ${PORT}`)
    } catch (error) {
        console.log(error);
    }
}


start()