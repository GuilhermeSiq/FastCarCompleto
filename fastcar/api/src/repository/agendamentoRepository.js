import { con } from "./connection.js";

export async function AgendamentoTestedrive(agend){
    const comando =
    
    `insert into tb_agendamento (NM_CLIENTE, NM_VEICULO, NM_COR, DS_CPF, DS_TELEFONE, DT_ATENDIMENTO)
    values ( ?, ?, ?, ?, ?, ?)`

     const [resposta] = await con.query(comando,[agend.cliente, agend.carro, agend.cor, agend.cpf, agend.telefone,  agend.atendimento ]);
     agend.id = resposta.insertId;
    
     return agend;


    }

    export async function listatodosagendamentos (){
        const comando = 
        `SELECT ID_agendamento			id,
        NM_cliente    cliente,
        NM_veiculo	    carro,
        NM_cor		    cor,
        DS_cpf	        cpf,
        DS_telefone   telefone,
        DT_atendimento  atendimento
    FROM tb_agendamento;`
    
    
    const [ linhas ] = await con.query(comando);
    return linhas;
    }

    export async function deletaagendamento (id){
        const comando = 
        `DELETE FROM TB_AGENDAMENTO
        WHERE id_agendamento = ? `;
        const [resposta] = await con.query(comando, [id]);
        return resposta.affectedRows;
    }



    export async function buscarPorNome(nome) {
        const comando =
            `SELECT ID_AGENDAMENTO		id,
                    NM_CLIENTE		cliente,
                    NM_VEICULO      carro,
                    NM_COR	cor,
                    DS_CPF	cpf,
                    DS_TELEFONE	telefone,
                    DT_ATENDIMENTO      atendimento
               FROM tb_agendamento
              WHERE NM_CLIENTE like ? `;
        
        const [linhas] = await con.query(comando, [ `%${nome}%` ]);
        return linhas;
    }

    export async function buscarPorId(id) {
        const comando =
            `SELECT ID_AGENDAMENTO		id,
                    NM_CLIENTE		cliente,
                    NM_VEICULO      carro,
                    NM_COR	cor,
                    DS_CPF	cpf,
                    DS_TELEFONE	telefone,
                    DT_ATENDIMENTO      atendimento
               FROM tb_agendamento
              WHERE ID_AGENDAMENTO = ? `;
        
        const [linhas] = await con.query(comando, [id]);
        return linhas[0];
    }


    export  async function alteraAgendamento(id, agend){
        const comando = 
            `update tb_agendamento
            set	NM_VEICULO  = ?,
                NM_COR	= ?,
                DS_CPF	= ?,
                DS_TELEFONE	= ?,
                NM_CLIENTE	= ?,
                DT_ATENDIMENTO = ?
            where id_agendamento = ?`
    const [resposta] = await con.query(comando,[agend.carro, agend.cor, agend.cpf, agend.telefone, agend.cliente, agend.atendimento,  id ])
    return resposta.affectedRows;
    }

