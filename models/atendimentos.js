const conexao = require('../infraestrutura/conexao')
const moment = require('moment');

class Atendimento{
    adiciona(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao}

        const sql = 'INSERT INTO Atendimentos SET ?'
        conexao.query(sql, atendimentoDatado, (erro, resultado)=>{
            if(erro){
               console.log(erro);
            }else {
                console.log(resultado)
            }
        })
    }
}

module.exports = new Atendimento;