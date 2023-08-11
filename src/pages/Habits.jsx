import styled from "styled-components"
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Habits({id, name, done, currentSequence, highestSequence, check, setCheck, userData}) {
    
    function checkButton (sId, sCheck) {
        const URL=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        let config = {
            headers: {
                'Authorization': 'Bearer ' + userData.token
            }
        }
        const promise = axios.get(URL,config);
    
        promise.then((answer) => {
          console.log("Ação marcada Check: "+answer);
          setCheck("true");
        }); // se der certo e os dados chegare
    
        promise.catch((error) => {
          console.log(error.response.data);
        }); // se der erro
    }
    
    return (
        <div data-test="today-habit-container">
        <ContainerHabits>
            <ContainerHabitsText>
                <h1 data-test="today-habit-name">{name}</h1>
                <div data-test="today-habit-sequence">
                <ContainerHabitsSequenceAndRecord>
                    <h1>Sequência atual:</h1> <h2>{currentSequence} dias</h2>
                </ContainerHabitsSequenceAndRecord>
                </div>
                <div data-test="today-habit-record">
                <ContainerHabitsSequenceAndRecord>
                    <h1>Seu recorde:</h1> <h2>{highestSequence} dias</h2>
                </ContainerHabitsSequenceAndRecord>
                </div>
                <div data-test="today-habit-check-btn" onClick={() => checkButton(id, check)}>
                <ContainerHabitsCheck props={check}>
                    <img src="./assets/Check.png"/>
                </ContainerHabitsCheck>
                </div>
            </ContainerHabitsText>

        </ContainerHabits>
        </div>
    )   

}

const ContainerHabits = styled.div`
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
  
  const ContainerHabitsText = styled.div`
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

  const ContainerHabitsSequenceAndRecord = styled.div`
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

  const ContainerHabitsCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: ${(props) => props ? "#8FC549" : "#EBEBEB"}; 
    border: 1px solid ${(props) => props ? "#8FC549" : "#EBEBEB"}; 
    border-radius: 5px;
`
  
 const ContainerHabitsChecked = styled.div`
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