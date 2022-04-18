const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Client = sequelize.define('Client',
    Attributes,
    {
      timestamps: false,
      tableName: 'Clients',
    });

  Client.associate = (models) => {
    Client.hasMany(models.Reservation, { foreignKey: 'clientId', as: 'reservations' });
  };

  return Client;
};