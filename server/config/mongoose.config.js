const mongoose = require("mongoose");

const movieDB = "movieDB";

// mongoose.connect(`mongodb://localhost/${movieDB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(()=>{
//         console.log(`You are connected to the database called ${movieDB}`)
//     })
//     .catch((err)=>{
//         console.log(`You are having an issue connecting to ${movieDB}`)
//     })

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the database called ${process.env.DB_NAME}`)
    })
    .catch((err)=>{
        console.log(`you had a problem connecting the ${process.env.DB_NAME}. Here is your error:`, err)
    })
