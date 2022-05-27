

"use strict";
const { Model } = require("sequelize");



  

module.exports = (sequelize, DataTypes) => {
class Employe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.user);
    }  }
  Employe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true,
      },

      Age: {
          type: DataTypes.INTEGER,
          autoIncrement : false,
          allowNull: false,
          primaryKey: false,
        },
      
        Anicienneté: {
          type: DataTypes.INTEGER,
          autoIncrement : false,
          allowNull: false,
          primaryKey: false,
        
        },
        fullName: {
            type: DataTypes.STRING(30),
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
          matricule: {
            type: DataTypes.STRING,
            allowNull: true,
          }
    },
    
    {
      
      sequelize : sequelize,
      modelName: "Employe",
    }
  );
  return Employe;
}