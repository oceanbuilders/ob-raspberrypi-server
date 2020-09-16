const db = require('../config/db.config.js');
const { Op } = require('sequelize');
const Event = db.table;
 
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