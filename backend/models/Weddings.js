const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Weddings extends Model {};

Weddings.init({
    weddingName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    spouseName1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    spouseName2: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{sequelize})

module.exports = Weddings;


