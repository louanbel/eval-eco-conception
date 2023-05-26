const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 8080;
const trads = require("./data-trad.json")

app.use(express.static('src/public'));
app.use((req, res, next) => {
    // Ajouter l'attribut "Cache-Control" avec une durée de mise en cache de 1 heure
    res.setHeader('Cache-Control', 'max-age=3600');
    next();
});

app.get("/api", (req, res) => {
    res.send({msg: "hello world"})
})

app.get("/api/:lang/:id", (req, res) => {
    const {lang, id} = req.params
    res.send(trads[lang]?.[id] || trads.fr[id] || "")
})

app.get("/api/:lang", (req, res) => {
    const {lang, id} = req.params
    res.send({...trads.fr, ...trads[lang]})
})

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});