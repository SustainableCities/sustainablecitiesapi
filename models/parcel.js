'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parcel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  parcel.init({
    hundredYearFlood: DataTypes.STRING,
    asbestosExterior: DataTypes.STRING,
    berdoHvacProjects: DataTypes.STRING,
    berdoEnvelopeProjects: DataTypes.STRING,
    acType: DataTypes.STRING,
    tenant: DataTypes.STRING,
    buildingAgeClass: DataTypes.STRING,
    lastMajorRenovation: DataTypes.STRING,
    parcelID: DataTypes.STRING,
    heatType: DataTypes.STRING,
    solar: DataTypes.STRING,
    insulation: DataTypes.STRING,
    roof: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'greenops',
    modelName: 'parcel',
    timestamps:false
  });
  return parcel;
};