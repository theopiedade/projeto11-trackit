import styled from "styled-components"
import { useParams, useNavigate, useLocation} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function HomePage () {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [formStatus, setFormStatus] = useState(false);

    function sendRequest(event) {
        event.preventDefault();
        setFormStatus(true);
        const data = {
        	email: email,
            password: password
        };
        console.log("email:"+data.email);
        console.log("name:"+data.password);
        console.log("Server Post");
        const query = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', data);
        query.then(loginSuccess); 
        query.catch(loginError);
      }

      function loginSuccess () {
        console.log("Login Success!");
        navigate("/hoje");
      }

      function loginError (answer) {
        console.log("Deu erro");
        console.log("Erro:"+answer.code+" Msg:"+answer.message);
        alert("Erro: "+answer.message);
        setFormStatus(false);
      }


    function createAccount() {
        navigate("/cadastro");
    }

    return (
        <ContainerHome> 
        <img src="assets/logo-start.png"/>
        <h1>TrackIt</h1>       
            <ContainerForm> 
                <form className="containerForm" onSubmit={sendRequest}>
                    <input value={email} type="email" disabled={formStatus} onChange={e => setEmail(e.target.value)}  placeholder="Email" />
                    <input value={password} type="password" disabled={formStatus} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
                    <button disabled={formStatus}>Entrar</button>
                </form>
            </ContainerForm> 
        <h2 onClick={createAccount}>Não tem uma conta? Cadastre-se!</h2>
        </ContainerHome> 
    );
}



export const ContainerHome = styled.div`
    width: 375px;
    height: 667px; 
    background-color: #FFFFFF;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    img {
        margin-top: 80px;
        width: 154px;
        height: 80px;
        background-color: #FFFFFF;
      }
    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
      }
    h2 {
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
      }
  }
  `

  
  export const ContainerForm  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
        margin-top: 6px;
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #DBDBDB;;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        text-decoration-color: #DBDBDB;
      }

      button {
        margin-top: 6px;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
      }
  
  }
  `