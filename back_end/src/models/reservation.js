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
    type: DataTypes.INTEGER
  },
  quantityDays: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  clientId: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  totalPrice: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
};

module.exports = (sequelize) => {
  const Resevation = sequelize.define('Resevation',
    Attributes,
    {
      timestamps: false,
      tableName: 'Resevations',
    });
    
  return Resevation;
};