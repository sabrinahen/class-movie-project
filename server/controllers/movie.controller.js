const Movie = require("../models/movie.model");

module.exports = {

    findAllMovies: (req, res)=>{
        Movie.find()
            .then((allMovies)=>{
                console.log(allMovies);
                res.json(allMovies)
            })
            .catch((err)=>{
                console.log("findAllMovies has failed");
                res.json({message: "Something went wrong with findAll", error: err})
            })
    },

    creatNewMovie: (req, res)=>{
        Movie.create(req.body)
        .then((newMovie)=>{
            console.log(newMovie);
            res.json(newMovie)
        })
        .catch((err)=>{
            console.log("Something went wrong in createNewMovie!");
            res.status(400).json(err)
        })
    },

    findOneMovie: (req, res)=>{
        Movie.findOne({_id: req.params.id})
            .then((oneMovie)=>{
                console.log(oneMovie);
                res.json(oneMovie);
            })
            .catch((err)=>{
                console.log("findOneMovie has failed!");
                res.json({message: "Something went wrong with findOneMovie", error: err})
            })
    },

    deleteOneMovie: (req, res)=>{
        Movie.deleteOne({_id: req.params.id})
            .then((deletedMovie)=>{
                console.log(deletedMovie);
                res.json(deletedMovie);
            })
            .catch((err)=>{
                console.log("deleteOneMovie has failed!");
                res.json({message: "Something went wrong with deleteOneMovie", error: err})
            })
    },

    updateMovie: (req, res)=> {
        Movie.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            // Tom said hint hint when talking about runValidators!!!
            )
            .then((updatedMovie)=>{
                console.log(updatedMovie);
                res.json(updatedMovie);
            })
            .catch((err)=>{
                console.log("Something went wrong in updateMovie!");
                res.status(400).json(err)
            }
            )
    }


}