module.exports = function (sequelize, DataTypes) {
    const inbox = sequelize.define("Inbox", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        author: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        content: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        text: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        imageUrl: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },     
    });
    return inbox;
  };
  