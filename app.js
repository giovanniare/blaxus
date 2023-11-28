const express = require("express")
const hbs = require("hbs")

app = express()
port = process.env.PORT || 4000

require("./hbs/helpers")
hbs.registerPartials(__dirname + "/views/partials")

app.use(express.static(__dirname + "/public"))
app.set("view engine", "hbs")

app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.render("home")
})
