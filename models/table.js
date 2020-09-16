module.exports = (sequelize, Sequelize) => {
  const table = sequelize.define(`${process.env.DB_TABLE}`, {
    EventID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Temperature: {
      type: Sequelize.INTEGER
    },
    TimeStamp: {
      type: Sequelize.DATE
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return table;
}