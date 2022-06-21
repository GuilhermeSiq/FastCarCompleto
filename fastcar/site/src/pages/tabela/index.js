import './index.scss';
import { confirmAlert } from 'react-confirm-alert'
import { BuscarAgendamentoPorNome, deletarAgendamento, listaagendamentos, alterarAgendamento} from '../../api/agendamentoApi'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


export default function Index() {

    const [nome, setNOME] = useState ([])
    const [filtro, setFiltro] = useState ('')

    const navigate = useNavigate();

    function editarAgendamento(id){
        navigate(`/alterar/${id}`)
    }

    async function filtrar(){
        const resp = await BuscarAgendamentoPorNome(filtro);
        setNOME(resp);
    }

    async function deletaAgendamento (id, nome){

        confirmAlert({
            title: 'Remover Agendamento',
            message: `deseja remover o agendamento ${id}?`,
            buttons: [
                {
                    label:'sim',
                    onClick: async () => {
                        const filtro = await deletarAgendamento (id, nome);
                          if(filtro === ''){
                         carregarTodosAgendamentos();
                      }
                          else
                          filtrar();
                          toast.dark('agendamento removido')
                    }
                },
                {
                    label:'Não'
                }
            ]
        })

        
    }

    async function carregarTodosAgendamentos(){
        const resp = await listaagendamentos();
        setNOME(resp);
    }

    useEffect(() => {
        carregarTodosAgendamentos();
    }, [])

    
    return (
        <main className='page page-consultar'>
            
            
            <div className='container'>
                
                <div className='conteudo'>
                    <div classname='buscaagenda'>
                        <div className='caixa-busca'>
                            <input type="text" placeholder='Buscar agendamento por nome' value={filtro} onChange={e => setFiltro(e.target.value)}/>
                            <img src='/images/lupa.png' alt='buscar' onClick={filtrar} />
                        </div>
                        <div className="Div-Botao-Agendar2">
                            <a className="Botao-agendar" href="/agendamento">AGENDAR</a>
                        </div>
                    </div>

                    

                    <table>
                        <thead>
                            <tr>
                                
                                <th>ID</th>
                                <th>CLIENTE</th>
                                <th>CARRO</th>
                                <th>COR</th>
                                <th>CPF</th>
                                <th>TELEFONE</th>
                                <th>ATENDIMENTO</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>

                            {nome.map(item =>
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.cliente}</td>
                            <td>{item.carro}</td>
                            <td>{item.cor}</td>
                            <td>{item.cpf}</td>
                            <td>{item.telefone}</td>
                            <td>{item.atendimento.substr(0, 16)}</td>
                            <td>
                                <img src='/images/lapis.png' alt='editar' onClick={() => editarAgendamento(item.id)} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='./images/filled-trash.png' alt='remover' onClick={() => deletaAgendamento(item.id, item.nome) } />
                            </td>
                        </tr>

                                )}                  
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </main>
    )
}