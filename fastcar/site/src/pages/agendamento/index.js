import './index.scss';
import { cadastrarAgendamento, buscarPorId, alterarAgendamento} from '../../api/agendamentoApi'
import {useEffect, useState} from 'react'
import {useHref, useParams} from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export default function Index(){
    const [cliente, setCliente] = useState('');
    const [carro, setCarro] = useState('');
    const [cor, setCor] = useState('');
    const [cpf, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [atendimento, setAtendimento] = useState('');
    const [ID, setId] = useState(0);

    const { idparams } = useParams();

    useEffect(() => {
        if (idparams) {
            carregarAgendamento();
        }
    }, [])

    async function carregarAgendamento() {
        const resposta = await buscarPorId(idparams);
        setCliente(resposta.cliente);
        setCarro(resposta.carro);
        setCor(resposta.cor);
        setCPF(resposta.cpf);
        setTelefone(resposta.telefone);
        setAtendimento(resposta.atendimento.substr(0, 16));
        setId(resposta.id);
    }


    async function salvarClick(){
        try{      
            if(ID === 0 ) {
            const r = await cadastrarAgendamento(cliente,carro,cor,cpf,telefone,atendimento);
            setId(r.ID)
            toast.dark('agendamento concluido');
        }
        else {
           await alterarAgendamento(ID, cliente, carro, cor, cpf, telefone, atendimento);
           toast.dark('agendamento alterado')
        }
    }
        catch (err){
            toast.error(err.response.data.erro)
        }
        
        
    }

    function novoClick() {
        setId(0);
        setCliente('');
        setCarro('');
        setCor('');
        setCPF('');
        setTelefone('');
        setAtendimento('');
    }


    return(
        <div className='pagina-agendamento'>
            <ToastContainer/>
            
            <div className='Div-FaixaPreta'>
        <div className='Div-Image-Logo'>
            <img className='Image-Logo' src='/images2/1650664822990.png' alt=''/>
        </div>
    </div>



    <div className='Div-Div-Agendar'>
        <div className='Div-Agendar'>


            <div className='Agendar'>
                <p className='p-titulo'>AGENDAR</p>
            </div>


            <p className='p-veiculo2'>
                Nome Completo:
            </p>

            <input type='text' placeholder='Insira o nome do cliente' value={cliente} onChange={e => setCliente(e.target.value)}/>


            <div className='div-cor'>

            <p className='p-veiculo'>
                Veículo desejado:
            </p>


            <p className='p-veiculo2'>
                Cor:
            </p>

            </div>


            <div className='div-cor'>

            <input className='areav' type='text' placeholder='Insira o nome do veículo' value={carro} onChange={e => setCarro(e.target.value)}/>

            <input className='areac' type='text' placeholder='Insira a cor' value={cor} onChange={e => setCor(e.target.value)}/>


            </div>


            <div className='div-cor'>

                <p className='p-veiculo2'>
                    Data e Horas:
                </p>
    
    
                </div>
    
    
                <div className='div-cor'>
    
                <input className='areav' type='datetime-local' placeholder='data' value={atendimento} onChange={e => setAtendimento(e.target.value)}/>
               
    
    
                </div>



                <div className='div-cor'>

                    <p className='p-veiculo2'>
                        CPF:
                    </p>
        
        
                    <p className='p-veiculo2'>
                        Telefone:
                    </p>
        
                    </div>
        
        
                    <div className='div-cor'>
        
                    <input className='areav' type='text'placeholder='Insira seu CPF' value={cpf} onChange={e => setCPF(e.target.value)}/>
        
                    <input className='areac' type='text' placeholder='Insira seu telefone' value={telefone} onChange={e => setTelefone(e.target.value)}/>
        
        
                    </div>




            <div className='div-botao'>
                <button className='botao' onClick={salvarClick}> {ID === 0 ? 'SALVAR' : 'ALTERAR'}</button> 
            </div>
            <div className='div-botao'>
                <button className='botao' onClick={novoClick}> NOVO</button> 
            </div>


        </div>


        <div className='img'>
            <img className='wi' src='/images2/ilustracao-do-conceito-de-conducao-de-carro_114360-8091.webp' alt=''/>
        </div>


    </div>


<div className='rodape'>

    <div className='div-rodape'>
        <img className='png1' src='/images2/f.svg' alt=''/>
        <img className='png2' src='/images2/i.svg' alt=''/>
        <img className='png' src='/images2/t.svg' alt=''/>

        <p classNameName='p-roda'>
            Telefone para contato: (11) 976073105
        </p>

        <p className='p-roda2'>
            Email para contato: FastCar@gmail.com
        </p>

    </div>
</div>
        </div>
    )

}