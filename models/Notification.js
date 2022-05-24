

"use strict";
const { Model } = require("sequelize");



  

module.exports = (sequelize, DataTypes) => {
class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
    this.belongsTo(models.user,{as:"sender"});
    }  }
  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true,
      },
    
        
      
        reciver: {
          type: DataTypes.INTEGER,
          autoIncrement : false,
          allowNull: false,
          primaryKey: false,
        },
      
        type_event: {
          type: DataTypes.STRING,
          autoIncrement : false,
          allowNull: false,
          primaryKey: false,
        },
      
        vu: {
          type: DataTypes.INTEGER,
          autoIncrement : false,
          allowNull: false,
          primaryKey: false,
          defaultValue : 1 
        }
    },
    
    {
      
      sequelize : sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
}