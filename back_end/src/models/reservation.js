const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  checkIn: {
    allowNull: false,
    type: DataTypes.DATE
  },
  checkOut: {
    allowNull: false,
    type: DataTypes.DATE
  },
  quantityDays: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  clientId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    foreingKey: true,
  },
  totalPrice: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
};

module.exports = (sequelize) => {
  const Reservation = sequelize.define('Reservation',
    Attributes,
    {
      timestamps: false,
      tableName: 'Reservations',
    });

  Reservation.associate = (models) => {
    Reservation.belongsTo(models.Client, { foreignKey: 'clientId', as: 'client' });
  };

  return Reservation;
};