const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const CategoriaProduto = sequelize.define(
        "CategoriaProduto",
        {
            id:{
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true,
               notNull: true,
            },
            categoria:{
                type: DataTypes.STRING,
                notNull: true,
            },
            modelo:{
                type: DataTypes.STRING,
                notNull: true,
            },
            descricao:{
                type: DataTypes.STRING,
                notNull: true,
            },
            preco:{
                type: DataTypes.INTEGER,
                notNull: true,
            },
            produtos_id:{
                type: DataTypes.INTEGER,
                notNull: true,
            },
           
        
        },
        {
            tableName:"CategoriaProdutos",
        underscored: true,
        },
    );
return CategoriaProduto
}