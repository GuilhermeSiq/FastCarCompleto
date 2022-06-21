import { con } from "./connection.js";

export async function cadastrarfuncionario(email,senha) {
    const comando = 
    `select ID_FUNCIONARIO 		id,
                DS_EMAIL		email
           from tb_funcionario
          where DS_EMAIL 		= ?
            and DS_SENHA		= ? `

    const [linhas] = await con.query(comando,[email,senha])
    return linhas[0];
}