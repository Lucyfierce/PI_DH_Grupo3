const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "usuario",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement: true,
                notNull: true,
            },
            nome: {
                type: DataTypes.STRING,
                autoIncrement: true,
                notNull: true,
            },
            email: {
                type: DataTypes.STRING,
                notNull: true,
            },
            password: {
                type: DataTypes.STRING, // saber se poder ser outross type pois senha pode ter numeros INTEGER e STRING
                notNull: true,
            },
            newsletter: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
             newsletter: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            
        },
        {
            tableName: "Usuario",
            underscored: true,
        },
    );
    return Usuario
}