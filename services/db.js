const db = require('../config/db.config.js');
const { Op } = require('sequelize');
const Event = db.events;
const Topic = db.topics;
 
exports.findAll = (req, res) => {
  Event.findAll()
    .then(Events => {
      res.json(Events);
    })
    .catch(error => res.status(400).send(error))
};
 
exports.findById = (req, res) => {  
  Event.findByPk(req.params.eventId)
      .then(Event => {
          if (!Event){
            return res.status(404).json({message: "Event Not Found"})
          }
          return res.status(200).json(Event)
        }
      ).catch(error => res.status(400).send(error));
};

exports.findByDate = (req, res) => {  
  Event.findAll({
    where: {
      TimeStamp: {
        [Op.between]: [req.params.startDate, req.params.endDate],
      }
    }
  }).then(Event => {
    if (!Event){
      return res.status(404).json({message: "Event Not Found"})
    }
    return res.status(200).json(Event)
  }).catch(error => res.status(400).send(error));
};

exports.getTopicData = (req, res) => {  
    Event.findAll({
      where: {
        topic: req.params.topic
      }
    }).then(Event => {
      if (!Event){
        return res.status(404).json({message: "Topic Has No Data"})
      }
      return res.status(200).json(Event)
    }).catch(error => res.status(400).send(error));
};

exports.getTopicDatawithDates = (req, res) => {  
    Event.findAll({
      where: {
        topic: req.params.topic,
        TimeStamp: {
            [Op.between]: [req.params.startDate, req.params.endDate],
        }
      }
    }).then(Event => {
      if (!Event){
        return res.status(404).json({message: "Topic with Specific Dates Has No Data"})
      }
      return res.status(200).json(Event)
    }).catch(error => res.status(400).send(error));
};

exports.getAllTopics = (req, res) => {
    Topic.findAll()
    .then(Events => {
      res.json(Events);
    })
    .catch(error => res.status(400).send(error))
}

exports.getAllTopicsHasValue = (req, res) => {
    db.sequelize.query("SELECT DISTINCT `topic` FROM `DataSensorTest`", { type: db.sequelize.QueryTypes.SELECT })
    .then(Topics => {
        res.json(Topics);
    })
    .catch(error => res.status(400).send(error))    
}
