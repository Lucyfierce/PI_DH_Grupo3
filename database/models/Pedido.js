const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
        "Pedido",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true, // nao sei se seria esse altoincremente
                autoIncrement: true,
                notNull: true,
            },
            cliente_id: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            total: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            status_pedido: {
                type: DataTypes.STRING,
                notNull: true,
            },
            pagamento_id: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                notNull: true,
            }
        },
        {
            tableName: "Pedido",
            underscored: true,
        },
    );
    
    Pedido.associate = function(models){
        Pedido.hasMany(models.Usuario, {

            as: "usuario_pedido",
            foreginKey: "usuario_id", 
        });

    Pedido.associate = function(models){
        Pedido.belongsTo(models.Pagamento, {
    
                as: "usuario_pagamento",
                foreginKey: "pagamento_id ", 
            });

    Pedido.associate = function(models){
        Pedido.belongsToMany(models.Produto, {
        
                    as: "pedido_produto",
    
                    through: "produtos_pedidos",
                    foreginKey: "produto_id",
                    otherKey: "pedido_id",
    
                });   


    return Pedido;
}}}}