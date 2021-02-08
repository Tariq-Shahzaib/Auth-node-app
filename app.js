const express = require("express")
const createHttpError = require("http-errors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const { response } = require("express")
var exphbs  = require('express-handlebars');
require("dotenv").config()


const app = express()
app.use(morgan("dev"))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static("public"))
const PORT = process.env.PORT || 3000


app.use('/', require("./routes/index.route"))
app.use("/auth", require("./routes/auth.route"))
app.use("/user", require("./routes/user.route"))

app.use((req, res, next) => {
    next(createHttpError.NotFound())
})

app.use((error, req, res , next) => {
error.status = error.status || 500
response.status(error.status)
res.send(error )
})

mongoose.connect(process.env.MONGO_URI, {
    dbName : process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(() => 
{
    console.log("Connected to db")
    app.listen(PORT, () => {
        console.log(`Running on ${PORT}`)    
    })
}
    ).catch((err) => console.log(err))



