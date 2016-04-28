"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    remarks: DataTypes.STRING,
    field1: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Task;
};
