import { Router } from "express";
import { cadastrarfuncionario } from '../repository/usuarioRepository.js';
const server = Router();

server.post('/funcionario', async (req,resp) => {
    try {
        
      const {email, senha} = req.body;
      const funcc = await cadastrarfuncionario(email, senha);
      if (!funcc) {
        throw new Error('Credenciais inválidas');
    }
      
      resp.send(funcc);
 
 
    }
    
    
    catch (err) {
 
     resp.status(401).send({
         erro: err.message
     })
        
    }
 
 
 })

 export default server;