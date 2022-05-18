"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Demande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.user);
    }
  }
  Demande.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true,
      },
    
      status: {
       type: DataTypes.BOOLEAN ,
       defaultValue: false,
      }
    },

    {
      sequelize,
      modelName: "Demande",
    }
  );
  return Demande;
}