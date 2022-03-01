const db = require('../database/models/index.js');
const Movies = db.Movie;

const genresController = {
    list: (req,res) => {
        db.Genre.findAll()
            .then (genres => {
                res.render('genresList.ejs', {genres})
            }).catch((error) => {
                if (error) throw error;
                })
    },
    detail: (req,res) => {
        db.Genre.findByPk(req.params.id)
            .then (genre => {
                res.render('genresDetail.ejs', {genre})
            }).catch((error) => {
                if (error) throw error;
                })
    },

}

module.exports = genresController