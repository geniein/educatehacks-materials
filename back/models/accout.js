module.exports = function (sequelize, DataTypes) {
    const account = sequelize.define("Account", {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      occupation: {
        type: DataTypes.STRING(2),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      }      
    });
    return account;
  };
  