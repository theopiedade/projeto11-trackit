import { useContext, useState, useEffect} from "react";
import styled from "styled-components";
import Context from "../../Context";
import axios from 'axios';
import Habits from "../Habits"
import Topo from "../Fixed/Topo";
import Menu from "../Fixed/Menu";

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
    const [json, setJson] = useState([]);
    const [check, setCheck] = useState("");
    const [percent, setPercent] = useState(0);
    const [concluded, setConcluded] = useState(0);
    const [countIds, setCountIds] = useState(0);

    const today = new Date();
    const day = today.getDate().toString().padStart(2,'0');
    const month = String(today.getMonth() + 1).padStart(2,'0');
    const DayName = weekDays[today.getDay()];
    const actualDate = `${DayName}, ${day}/${month}`;

    useEffect(() => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + userData.token
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    
        const promise = axios.get(URL,config);
    
        promise.then((answer) => {
          setJson(answer.data);
        
          if (json.length > 0) {
            json.map(item => {
                    if (item.done == true) {
                        let tConcluded = concluded;
                        tConcluded+=1;
                        setConcluded(tConcluded);
                    }
                    let tCountIds = countIds;
                    tCountIds+=1;
                    setCountIds(tCountIds);
                })
                const calcPercent = Math.round((concluded/countIds)*100);
                setPercent(calcPercent);
          }
          

        }); // if ok
    
        promise.catch((error) => {
          console.log(error.response.data);
        }); // if go bad, error
    
      }, []);

    if (json.length == 0 || json == undefined || json == null) { 
        return (
            <ContainerBase>
    
                <Topo/>
    
                <ContainerMid>
                    <h1 data-test="today"> {actualDate} </h1>
                    <h2 data-test="today-counter"> Nenhum hábito concluído ainda</h2>
                </ContainerMid>

                <Menu/>
           
           </ContainerBase>
        )
    }
    else {
    return (
        <ContainerBase>

            <Topo/>

            <ContainerMid>
                <h1 data-test="today"> {actualDate} </h1>
                <h2> {percent}% dos hábitos concluídos </h2>
            
                {
                json.map(item => (
               <Habits 
               id={item.id} name={item.name} done={item.done} currentSequence={item.currentSequence} 
               highestSequence={item.highestSequence} check={check} setCheck={setCheck} 
               />

            ))}

            </ContainerMid>

            <Menu/>

        </ContainerBase>
    )
      }
}

export const ContainerBase = styled.div`
    position: relative;
    width: 375px;
    height: 667px;
    background:  #F2F2F2;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ContainerMid = styled.div`
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
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666;
  }
  
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
  }
  `