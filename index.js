require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Authentication = require("./routes/authentication");
const Users = require("./routes/users");
const path = require("path");

const Port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use("/user/authentication", Authentication);
app.use("/users", Users);

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(error, request, response, next){
    return response.status(error.status || 500).json({
        message: error.message || "Oop something went wrong"
    })
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  

app.listen(Port, function(){
    console.log(`it is working fine ${Port}`);
})
