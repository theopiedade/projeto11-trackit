import styled from "styled-components";
import Context from "../../Context";
import { useContext, useState, useEffect} from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { useParams, useNavigate} from 'react-router-dom';
import Habits from "../Habits"
import Topo from "../Fixed/Topo";
import Menu from "../Fixed/Menu";
import {ContainerBase, ContainerMid} from "../Hoje/Hoje";

export default function Habitos() {

    const [habit, setHabit] = useState("");

    function createHabit () {

    }

    return(
        <ContainerBase>
    
        <Topo/>

        <ContainerMid>
           <MyHabitsTop>
            <h1> Meus Hábitos </h1><p>+</p>
            </MyHabitsTop>
            <h2> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </h2>

            <ContainerCreateHabit>

                <ContainerForm>

                <form onSubmit={createHabit}>
                    <input onChange={e => setHabit(e.target.value)} placeholder="nome do hábito"></input>

                    <WeekDays>
                    <p>D</p> <p>S</p> <p>T</p> <p>Q</p> <p>Q</p> <p>S</p>
                    </WeekDays>

                </form>
                <Buttons>
                    <h1>Cancelar</h1> <button>Salvar</button>
                </Buttons>
                </ContainerForm>

            </ContainerCreateHabit>

            <ContainerHabit>
                <ContainerTitleAndDays>
                    <TitleAndTrash>
                        <h1> Ler 1 capítulo de livro</h1>
                        <img src="../assets/Trash.png"/>
                    </TitleAndTrash>
                    <WeekDays>
                    <p>D</p> <p>S</p> <p>T</p> <p>Q</p> <p>Q</p> <p>S</p>
                    </WeekDays>
                </ContainerTitleAndDays>
             
            </ContainerHabit>

        </ContainerMid>

        <Menu/>
   
        </ContainerBase>
    );
}

const MyHabitsTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    p {
        align-items: center;
        margin-right:18px;
        width: 40px;
        height: 35px;
        left: 317px;
        top: 92px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        /* identical to box height */
        text-align: center;
        color: #FFFFFF;
    }
`

const ContainerCreateHabit = styled.div`
    margin-top: 20px;
    width: 340px;
    height: 180px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
`
const ContainerForm = styled.div`
    margin-top: 18px;
    margin-left: 18px;
    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        text-align: space-around;
    }
`
const WeekDays = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
     p {
        margin-right: 4px;
        margin-top: 8px;
        margin-bottom: 8px;
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        text-align: center;
    }
`
const Buttons = styled.div`
  margin-top: 32px; 
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  h1 {
    margin-right: 23px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
  }
  button {
    margin-right: 16px;
    width: 84px;
    height: 35px;
    left: 257px;
    top: 277px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }
`

const ContainerHabit = styled.div`
    margin-top: 10px;
    width: 340px;    
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
`
const ContainerTitleAndDays = styled.div`
    margin-left:15px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`

const TitleAndTrash = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20x;
    line-height: 25px;
    color: #666666;
  }
  img {
    width: 13px;
    height: 15px;
    margin-right: 10px;
  }
`