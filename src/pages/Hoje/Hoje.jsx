import styled from "styled-components";
import Context from "../../Context";
import { useContext, useState, useEffect} from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { useParams, useNavigate} from 'react-router-dom';

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
          console.log(answer.data);
          setJson(answer.data);
        }); // se der certo e os dados chegare
    
        promise.catch((error) => {
          console.log(error.response.data);
        }); // se der erro
    
      }, []);

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

  const containerHabits = styled.div`
    margin-top: 10px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
 `
  
  const containerHabitsText = styled.div`
    margin-top: 13px;
    margin-left: 15px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Lexend Deca';
    font-style: normal;
 h1 {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }
  `

  const containerHabitsSequenceAndRecord = styled.div`
    display: flex;
    flex-direction: row;  
  h1 {
    margin-bottom: 0px;
    display: flex;
    justify-content: flex-start, center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    }
  h2 {
    margin-bottom: 0px;
    margin-left: 3px;
    display: flex;
    justify-content: flex-start, center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #8FC549;
  }
  `

  const containerHabitsCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`
  
 const containerHabitsChecked = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: #8FC549;
    border: 1px solid #8FC549;
    border-radius: 5px;
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