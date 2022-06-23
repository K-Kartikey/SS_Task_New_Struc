import { Sequelize } from "sequelize";

const sequelize= new Sequelize('SS_Books_New','root','kamalkamal2910',{
    dialect:'mysql',
    host:'localhost'
});

export default sequelize;