import {Sequelize} from "sequelize";

const db = new Sequelize('nest_nerd_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;