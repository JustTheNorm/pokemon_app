// Require modules
const express = require(`express`)
const morgan = require(`morgan`)
const pokemon = require(`./models/pokemon`)
// const mongoose = require(`mongoose`)
// const methodOverride = require("method-override");
// require(`dotenv`).config()

// Create the Express app
const app = express();

//Middleware
app.use(morgan(`dev`));
//Middleware to read post request
app.use(express.urlencoded({ extended: false }));

// app.use(methodOverride("_method"));

// app.use((req, res, next) => {
//   console.log(`I run for all routes`);
//   next();
// });

// Configure the app (app.set)
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


// Mount routes
app.get('/', (req, res)=> {
  	res.send('<h1>Welcome to the Pokemon App!</h1>');
});

app.get(`/pokemon`, (req,res)=>{
    res.render(`Index`, {pokemon:pokemon})
})

app.get(`/pokemon/:id`, (req,res)=>{
    const {id} = req.params
    res.render(`Show`, {pokemon:pokemon[id]})
})

//DELETE
// app.delete("/fruits/:id", (req, res) => {
    // console.log(`deleting...`);
    // const { id } = req.params;
    // Fruit.findByIdAndRemove(id, (err, data) => {
    //   console.log(data);
    //   if (err) {
    //     console.log(err);
    //     res.status(403).send(`Bad request`);
    //   }
    //   res.redirect(``);
    // });
//   });
  

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
//Connect to database
//  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//     mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });
});