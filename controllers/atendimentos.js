module.exports = app =>{
    app.get('/atendimentos', (req, resp) => {
        resp.send('Você está na pica de atendimentos')
    })
}

