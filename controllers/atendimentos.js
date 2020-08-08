module.exports = app =>{
    app.get('/atendimentos', (req, resp) => {
        resp.send('Você está na rota de atendimentos realizando um GET')
    })

    app.post('/atendimentos', (req, resp) => {
        console.log(req.body);
        resp.send('Você está na rota de atendimentos realizando um POST')
    })
}

