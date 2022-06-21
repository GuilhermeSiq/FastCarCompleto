import './index.scss';
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Index(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro,setErro] = useState('');

    const navigate = useNavigate()

    async function entrarClick(){
    try{    
    const r = await axios.post('http://localhost:5000/funcionario', {
        email: email,
        senha: senha
    });

    navigate('/tabela');
    

    } 
    catch(err){
        if(err.response.status == 401){
            setErro(err.response.data.erro)
        }

    }
    }

    return(
        <div className='pagina-login'>
        <header>
        <img src='/images/1650664822990.png' alt='' />

    </header>

    <section className='cent'>
        <div className='co'>
            <div className='co-a'>
                <div className='co-b'>
                    <div className='co-c'>
                        
                        <div className='c'>

                            <div className='kj'>
                            <center>
                            <h1>Login</h1>

                            <input  type='text' name='search' placeholder=' Email ' value={email} onChange={e => setEmail(e.target.value)} />
                            
                            <input type='password' name=' search ' placeholder=' *** ' value={senha} onChange={e => setSenha(e.target.value)} />
                            
                            <div>


                            </div>

                            <div className='cm'>
                                <button className='ol' onClick={entrarClick}>Entrar</button>                            
                            </div>

                            <div className='kj'>
                                {erro}
                            </div>
                        </center>
                        </div>

                            
                            
                            
                        </div>

                    </div>

                    <img className='imgl' src='/images2/2.png   ' alt='' />


                </div>
                
            </div>
        </div>
   
    </section>
    </div>
    )

}