const conexao = require('../infraestrutura/conexao')
const moment = require('moment');

class Atendimento{
    adiciona(atendimento, resp){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao}

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'data errada'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'nome com menos de 5 caracteres'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if(existemErros){
            resp.status(400).json(erros)
        }else{
            const sql = 'INSERT INTO Atendimentos SET ?'
            conexao.query(sql, atendimentoDatado, (erro, resultado)=>{
                if(erro){
                   resp.status(400).json(erro)
                }else {
                    resp.status(201).json(resultado);
                }
            })
        }
    }

    lista(resp){
        const sql = 'SELECT * FROM Atendimentos';
        conexao.query(sql, (erro, resultado)=>{
            if(erro){
                resp.status(404).json(erro);
            }else{
                resp.status(200).json(resultado);
            }
        })
    }
    buscaPorId(id, resp){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;
        conexao.query(sql, (erro, resultado)=>{
            const atendimento = resultado[0]
            if(erro){
                resp.status(404).json(erro);
            }else{
                resp.status(200).json(resultado);
            }
        })
    }

    altera(id, valores, resp){
        const sql = 'UPDATE Atendimentos SET ? WHERE id = ?';

        conexao.query(sql,[valores, id], (erro, resultado)=>{
            if(erro){
                resp.status(404).json(erro);
            }else{
                resp.status(200).json({...valores, id});
            }
        })
    }

    deleta(id, resp){
        const sql = 'DELETE FROM Atendimentos WHERE id = ?';

        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                resp.status(404).json(erro);
            }else{
                resp.status(200).json(id);
            }
        })
    }
}

module.exports = new Atendimento;