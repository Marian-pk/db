const db = require('../database/models/index.js');
const Movies = db.Movie;


const moviesController = {
    list: (req,res) => {
        db.Movie.findAll()
            .then (movies => {
                res.render('moviesList.ejs', {movies})
            }).catch((error) => {
                if (error) throw error;
                })
    },
    detail: (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then (movie => {
                res.render('moviesDetail.ejs', {movie})
            }).catch((error) => {
                if (error) throw error;
                })
    },
    new: (req,res) => {
        db.Movie.findAll({
            order: [
                ['title', 'ASC']
            ]
        }).then (movies => {
            res.render('moviesList.ejs', {movies})
        }).catch((error) => {
            if (error) throw error;
            })
    },
    recomended: (req,res) => {
        db.Movie.findAll({
            order: [
                ['release_date']
            ],
            limit: 5
        }).then (movies => {
            res.render('moviesList.ejs', {movies})
        }).catch((error) => {
            if (error) throw error;
            })
    },
    
}


module.exports = moviesController;