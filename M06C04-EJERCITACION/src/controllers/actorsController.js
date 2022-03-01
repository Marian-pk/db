const db = require('../database/models/index.js');
const Movies = db.Movie;

const actorsController = {
    list: (req,res) => {
        db.Actor.findAll()
            .then (actors => {
                res.render('actorsList.ejs', {actors})
            }).catch((error) => {
                if (error) throw error;
                })
    },
    detail: (req,res) => {
        db.Actor.findByPk(req.params.id)
            .then (actor => {
                res.render('actorsDetail.ejs', {actor})
            }).catch((error) => {
                if (error) throw error;
                })
    },

}

module.exports = actorsController