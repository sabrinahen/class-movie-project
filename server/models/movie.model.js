const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "A movie's title is required!"],
        maxLength: [30, "This movie's title is waaay too long! No more than 30 characters allowed."]
    },

    genre: {
        type: String,
        required: [true, "A movie's genre is required!"],
        enum: [
            "Crime Noir",
            "French Cinema",
            "Romcom",
            "Horror",
            "Sci-Fi",
            "Silent Movie",
            "Documentary",
            "Comedy",
            "Action",
            "Thriller",
            "Family",
            "Animated",
            "Drama"
        ]
    },

    boxArt: {
        type: String,
        required: [true, "Because we love pictures!"]
    },

    watchLength: {
        type: Number
    },

    rating: {
        type: String,
        enum: [
            "G",
            "PG",
            "PG-13",
            "R",
            "NC-17"
        ]
    },

    actors: {
        type: String
    },

    kidFriendly: {
        type: Boolean,
        required: [true, "We need to know if kids can watch!"]
    },

    yearReleased: {
        type: Number,
        min: [1920, "Nothing too old - they creep me out!"]
    }

    // _id is created
}, {timestamps: true})

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;