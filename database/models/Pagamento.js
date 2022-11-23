const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Pagamento = sequelize.define(
        "Pagamento",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                notNull: true,
            },
            quantidade: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            status: {
                type: DataTypes.STRING,
                notNull: true,
            },
            modo_pagamento: {
                type: DataTypes.STRING,
                notNull: true,
            },
           numero_cartao: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            cvv: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            valor: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            parcelas: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            endereco_id: {
                type: DataTypes.INTEGER,
                notNull: true,
            },

        },
        {
            tableName: "Pagamento",
            underscored: true,
        },
    );
    return Pagamento;
}