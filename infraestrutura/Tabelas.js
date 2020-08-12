class Tabelas{ 
    init(conexao){
        this.conexao = conexao;

        this.criarAtendimentos();
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(30), servico varchar(50) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log('erro na tabela')
            } else {
                console.log('tabela criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas;