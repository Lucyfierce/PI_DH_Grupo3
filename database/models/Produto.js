const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define(
        "Produto",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement: true,
                notNull: true,
            },
            cor: {
                type: DataTypes.STRING,
                autoIncrement: true,
                notNull: true,
            },
            imagem: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            
        },
        {
            tableName: "Produtos",
            underscored: true,
        },
    );
    return Produto
}