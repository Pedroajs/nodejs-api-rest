const Atendimento = require('../models/atendimentos')
module.exports = app =>{
    app.get('/atendimentos', (req, resp) => {
        resp.send('Você está na rota de atendimentos realizando um GET')
    })

    app.post('/atendimentos', (req, resp) => {
        const atendimento = req.body;
        
        Atendimento.adiciona(atendimento, resp);
        //resp.send('Você está na rota de atendimentos realizando um POST')
    })
}

