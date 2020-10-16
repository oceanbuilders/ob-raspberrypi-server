module.exports = (sequelize, Sequelize) => {
  const events = sequelize.define(`DataSensorTest`, {
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

  return events;
}