const Atendimento = require('../models/atendimentos')
module.exports = app =>{
    app.get('/atendimentos', (resp) => {
        Atendimento.lista(resp);
    })
    app.get('/atendimentos:id',(req, resp)=>{
        const id = parseInt(req.params);

        Atendimento.buscaPorId(id, resp);
    })
    app.patch('/atendimentos:id', (req, resp)=>{
        const id = parseInt(req.params);
        const valores = req.body;

        Atendimento.altera(id, valores, resp);
    })
    app.delete('/atendimentos:id', (req, resp)=>{
        const id = parseInt(req.params);

        Atendimento.deleta(id, resp);
    })

    app.post('/atendimentos', (req, resp) => {
        const atendimento = req.body;
        
        Atendimento.adiciona(atendimento, resp);
        //resp.send('Você está na rota de atendimentos realizando um POST')
    })
}

