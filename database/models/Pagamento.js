const { sequelize, DataTypes } = require("sequelize");

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
        type: DataTypes.STRING,
        notNull: true,
      },
      cvv: {
        type: DataTypes.STRING,
        notNull: true,
      },
      valor: {
        type: DataTypes.FLOAT,
        notNull: true,
      },
      parcelas: {
        type: DataTypes.STRING,
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
    }
  );


  Pagamento.associate = function (models) {
    Pagamento.belongsTo(models.Endereco, {
      as: "Endereco",
      foreginKey: "pagamento_id",
    });
  };
  Pagamento.associate = function (models) {
    Pagamento.hasMany(models.Pedido, {
      as: "Pedido",
      foreginKey: "pagamento_id",
    });
  };
  return Pagamento;
};
