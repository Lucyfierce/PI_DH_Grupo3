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
            cliente: {
                type: DataTypes.STRING,
                autoIncrement: true,
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
    return Pedido
}