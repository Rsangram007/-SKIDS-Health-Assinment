const express = require('express');
const route = require('./route/route');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false)
app.use(express.json());

mongoose.connect("mongodb+srv://Rsangram890:hPZbgpmJvegZil8Q@cluster0.osqcdhn.mongodb.net/Assinment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch((err) => console.log(err))

app.use('/', route);

app.all("/*", function (req, res) {
    res.status(404).send({ status: false, message: "Kindly give correct information in path param ! UNDERSTAND" });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});