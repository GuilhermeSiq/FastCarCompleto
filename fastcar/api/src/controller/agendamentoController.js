import { Router } from "express";
import { deletaagendamento, listatodosagendamentos, AgendamentoTestedrive, alteraAgendamento, buscarPorNome, buscarPorId } from "../repository/agendamentoRepository.js";
const server = Router();

server.get ('/agendamentos', async (req ,resp) => {
    try{
        const resposta = await listatodosagendamentos();
        resp.send(resposta);
    }   

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})


server.post('/agendartest', async (req,resp) => {
    try{
        const novoagendamento = req.body;
        
        if(!novoagendamento.cliente.trim()){
            throw new Error('Nome do cliente é obrigatório');
        }
        if(!novoagendamento.carro.trim()){
            throw new Error('Nome do carro é obrigatório');
        }
        
        if(!novoagendamento.cor.trim()){
            throw new Error('Cor do carro é obrigatório');
        }
        if(!novoagendamento.cpf.trim()){
            throw new Error('Cpf do cliente é obrigatório');
        }
        if(!novoagendamento.telefone.trim()){
            throw new Error('Telefone do cliente é obrigatório');
        }
        if(!novoagendamento.atendimento.trim()){
            throw new Error('Data e hora é obrigatória');
        }
        const agend = await AgendamentoTestedrive(novoagendamento);

        resp.send(agend);

    }
    catch (err){
        resp.status(401).send({
            erro: err.message
        })


    }
})

server.get('/agendamentos/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/agendamentos/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        
        const resposta = await buscarPorId(id);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete ('/testedrive/:id',async (req,resp) => {
    try{

        const { id } = req.params;
    
        const resposta = await deletaagendamento(id);
        resp.status(200).send();
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})


server.put ('/agendamento/:id', async (req,resp) => {
    try{
        const {id} = req.params;
        const agend = req.body;
   
        const resposta = await alteraAgendamento(id, agend);
        if (resposta != 1)
            throw new Error('agendamento não pode ser alterado');
        if(!agend.cliente.trim()){
                throw new Error('Nome do cliente é obrigatório');
            }
        if(!agend.carro.trim()){
                throw new Error('Nome do carro é obrigatório');
            }
        if(!agend.cor.trim()){
                throw new Error('Cor do carro é obrigatório');
            }
        if(!agend.cpf.trim()){
                throw new Error('Cpf do cliente é obrigatório');
            }
        if(!agend.telefone.trim()){
                throw new Error('Telefone do cliente é obrigatório');
            }
        if(!agend.atendimento.trim()){
                throw new Error('Data e hora é obrigatória');
            }
        else
            resp.status(204).send();
        
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;