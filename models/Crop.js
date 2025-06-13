const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Crop = sequelize.define('Crop', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plantedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  healthStatus: {
    type: DataTypes.STRING,
    defaultValue: 'Healthy'
  }
});

module.exports = Crop;
