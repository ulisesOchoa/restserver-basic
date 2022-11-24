const { response, request } = require('express')

const index = (req = request, res = response) => {
    const { q, name = 'no name', apikey } = req.query

    res.json({  // /api/user?q=hola&name=ulices&apikey=123456
        msn: "Metodo index del controlador",
        q,
        name,
        apikey
    })
}

const store = (req, res = response) => {
    const { name, age } = req.body;

    res.json({
        msn: "Metodo store del controlador",
        name,
        age
    })
}

const update = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msn: "Metodo update del controlador",
        id
    })
}

const destroy = (req, res = response) => {
    res.json({
        msn: "Metodo destroy del controlador"
    })
}


module.exports = {
    index,
    store,
    update,
    destroy
}