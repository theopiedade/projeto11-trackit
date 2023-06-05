import styled from "styled-components";
import Context from "../../Context";
import { useContext, useState, useEffect} from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { useParams, useNavigate} from 'react-router-dom';
import Habits from "../Habits"

const weekDays = [
    "Domingo",
    "Segunda", 
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]



export default function Hoje () {
    const [userData, setUserData] = useContext(Context);
    const navigate = useNavigate();
    const [json, setJson] = useState([]);
    const [check, setCheck] = useState("");

    const today = new Date();
    const day = today.getDate().toString().padStart(2,'0');
    const month = String(today.getMonth() + 1).padStart(2,'0');
    const DayName = weekDays[today.getDay()];
    const actualDate = `${DayName}, ${day}/${month}`;
    console.log("Data Atual: "+actualDate);

    useEffect(() => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + userData.token
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    
        const promise = axios.get(URL,config);
    
        promise.then((answer) => {
          console.log("Json:"+answer.data);
          setJson(answer.data);

          console.log("Json.length "+json.length);
        }); // se der certo e os dados chegare
    
        promise.catch((error) => {
          console.log(error.response.data);
        }); // se der erro
    
      }, []);

    if (json.length == 0 || json == undefined || json == null) { 
        return (
            <ContainerBase>
    
                <div data-test="header">
                <ContainerTop>  
                    <h1>TrackIt</h1>
                    <img data-test="avatar" src={userData.image} alt="User Image"/>
                </ContainerTop> 
                </div>
    
                <ContainerMid>
                    <h1 data-test="today"> {actualDate} </h1>
                    <h2 data-test="today-counter"> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </h2>
                </ContainerMid>
                    <div data-test="menu">
                    <ContainerBottomMenu>
                
                    <h1 data-test="habit-link" onClick={() => navigate("/habitos")}>Hábitos</h1>
                    <ContainerCircle> <div data-test="today-link" onClick={() => navigate("/hoje")}>Hoje</div> </ContainerCircle>
                    <h1 data-test="history-link" onClick={() => navigate("/historico")}>Histórico</h1>
              
                    </ContainerBottomMenu>
            </div>
           
           </ContainerBase>
        )
    }
    else {
    return (
        <ContainerBase>

            <div data-test="header">
            <ContainerTop>  
                <h1>TrackIt</h1>
                <img data-test="avatar" src={userData.image} alt="User Image"/>
            </ContainerTop> 
            </div>

            <ContainerMid>
                <h1 data-test="today"> {actualDate} </h1>
                <h2> { }% dos hábitos concluídos </h2>
            
                {
                json.map(item => (
               <Habits 
               id={item.id} name={item.name} done={item.done} currentSequence={item.currentSequence} 
               highestSequence={item.highestSequence} check={check} setCheck={setCheck} 
               />

            ))}

            </ContainerMid>

            <div data-test="menu">
            <ContainerBottomMenu>
                
                    <h1 data-test="habit-link" onClick={() => navigate("/habitos")}>Hábitos</h1>
                    <ContainerCircle> <div data-test="today-link" onClick={() => navigate("/hoje")}>Hoje</div> </ContainerCircle>
                    <h1 data-test="history-link" onClick={() => navigate("/historico")}>Histórico</h1>
              
            </ContainerBottomMenu>
            </div>

        </ContainerBase>
    )
      }
}

const ContainerBase = styled.div`
    position: relative;
    width: 375px;
    height: 667px;
    background:  #F2F2F2;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
  
const ContainerTop = styled.div`
    position: fixed;
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;

  h1 {
    margin-left: 18px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF; 
  }
  
  img {
    margin-right: 18px;
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    background: url(image.png);
    border-radius: 98.5px;
  }
 ` 
const ContainerMid = styled.div`
    margin-top: 98px;
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Lexend Deca';
    font-style: normal;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5; 
  }
  
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
  }
  
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
  }
  `

  
 const ContainerBottomMenu = styled.div`
    z-index: 0;
    position: absolute;
    width: 375px;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    display: flex;
    align-items: center;
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    margin-left: 36px;
    margin-right: 36px;
  }
  `

  const ContainerCircle = styled.div`
    position: absolute;
    width: 91px;
    height: 91px;
    left: 90px;
    bottom: -30px;
    background: #52B6FF;
    border-radius: 50%;
    margin: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
  `