import {ContainerHome, ContainerForm} from "../Homepage/HomePage";
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro () {

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [foto, setFoto] = useState("");
    const [formStatus, setFormStatus] = useState(false);
    const navigate = useNavigate();
    
    function returnHome() {
        navigate("/");
    }

    function signUpError(answer) {
        alert("Erro: "+answer.message);
        setFormStatus(false);
    }
    

    function sendRequest(event) {
        event.preventDefault();
        setFormStatus(true);
        const data = {
        	email: email,
            name: name,
            image: foto,
            password: password
        };
        console.log("email:"+data.email);
        console.log("name:"+data.name);   
        console.log("image:"+data.foto);   
        console.log("password:"+data.password);   
        const query = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data);
        query.then(() => returnHome() ); 
        query.catch(() => signUpError() );
      }

    return(
        <ContainerHome> 
        <img src="assets/logo-start.png"/>
        <h1>TrackIt</h1>
            
            <ContainerForm> 
            <form className="containerForm" onSubmit={sendRequest}>
                <input value={email} type="email" disabled={formStatus} onChange={e => setEmail(e.target.value)}  placeholder="Email" />
                <input value={password} type="password" disabled={formStatus} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
                <input value={name} type="text" disabled={formStatus} onChange={e => setName(e.target.value)} placeholder="Nome" />
                <input value={foto} type="text" disabled={formStatus} onChange={e => setFoto(e.target.value)} placeholder="Foto" />
                <button>Entrar</button>
            </form>
            </ContainerForm> 
        <h2 onClick={returnHome}>Já tem uma conta? Faça login!</h2>
        </ContainerHome> 

    );
    
}