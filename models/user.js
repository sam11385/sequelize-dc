'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
