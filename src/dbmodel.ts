import {DataTypes} from 'sequelize';
import sequelize from './dbconfig';

const Book = sequelize.define("book",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true,
    },
    bookName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ratings: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    
});

export default Book;

