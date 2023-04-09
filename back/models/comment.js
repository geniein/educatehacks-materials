module.exports = function (sequelize, DataTypes) {
    const comment = sequelize.define("Comment", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        inboxId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },       
        state: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        comment: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        text: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },          
    });
    return comment;
  };
  