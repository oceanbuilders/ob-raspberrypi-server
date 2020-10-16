module.exports = (sequelize, Sequelize) => {
  const topics = sequelize.define(`topics`, {
    topic: {
      type: Sequelize.STRING,
      primaryKey: true
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return topics;
}