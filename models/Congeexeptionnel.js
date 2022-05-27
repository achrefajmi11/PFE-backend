"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Congeex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.user);
    }
  }
  Congeex.init(
    {
      id_Conge: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true,
      },
      type_Conge: {
        type: DataTypes.STRING,
        autoIncrement : false,
        allowNull: false,
        primaryKey: false,
      }, 
      Date_debut: {
        type: DataTypes.DATE,
        autoIncrement : false,
        allowNull: false,
        primaryKey: false,
      }, 
      Date_retour: {
        type: DataTypes.DATE,
        autoIncrement : false,
        allowNull: false,
        primaryKey: false,
        
      },
      nombre_jrs: {
        type: DataTypes.INTEGER,
        autoIncrement : false,
        allowNull: false,
        primaryKey: false,
      },
      
      status: {
        type: DataTypes.STRING ,
        defaultValue: false,
       }
 
    },
    {
      sequelize,
      modelName: "Congeex",
    }
  );
  return Congeex;
}