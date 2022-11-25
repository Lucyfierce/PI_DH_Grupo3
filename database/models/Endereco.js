const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
      },
      logradouro: {
        type: DataTypes.STRING,
        notNull: true,
      },
      numero: {
        type: DataTypes.STRING,
        notNull: true,
      },
      CEP: {
        type: DataTypes.STRING,
        notNull: true,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      tableName: "Endereco",
      underscored: true,
    }
  );

  (Endereco.associate = function (models) {
    Endereco.belongsTo(models.Usuario, {
      as: "Endereco",
      foreginKey: "usuarios_id",
    });
  }),
    (Endereco.associate = function (models) {
      Endereco.belongsTo(models.Pagamento, {
        as: "Pagamento",
        foreginKey: "pagamento_id",
      });
    });

  return Endereco;
};
