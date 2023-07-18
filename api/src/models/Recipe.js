const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthscore: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.pixabay.com/photo/2018/03/05/06/26/board-3200054_960_720.jpg',
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  }, {
    timestamps: false,
  });
};
