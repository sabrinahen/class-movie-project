const mongoose = require("mongoose");

const movieDB = "movieDB";

mongoose.connect(`mongodb://localhost/${movieDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database called ${movieDB}`)
    })
    .catch((err)=>{
        console.log(`You are having an issue connecting to ${movieDB}`)
    })
