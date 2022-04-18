const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  room: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL
  }  
};

module.exports = (sequelize) => {
  const Room = sequelize.define('Room',
    Attributes,
    {
      timestamps: false,
      tableName: 'Rooms',
    });
    
  return Room;
};