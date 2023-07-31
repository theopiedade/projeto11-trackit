import styled from "styled-components";
import Context from "../../Context";
import { useContext, useState, useEffect} from "react";
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';
import Habits from "../Habits"
import Topo from "../Fixed/Topo";
import Menu from "../Fixed/Menu";
import {ContainerBase, ContainerMid} from "../Hoje/Hoje";
import WeekDays from "./WeekDays";

export default function Habitos() {
    const [userData, setUserData] = useContext(Context);
    const [habit, setHabit] = useState("");
    const [json, setJson] = useState([]);
    const [daysSelecteds, setDaysSelecteds] = useState([]);
    const [create, setCreate] = useState(false);

    function createHabit () {
        console.log("Entrou em createHabit");
        const data = {
            name: habit,
            days: daysSelecteds
        }
        let config = {
            headers: {
                'Authorization': 'Bearer ' + userData.token
            }
        }
        const URLPost = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

        const post = axios.post(URLPost, data, config);
        
        post.then(console.log);
        
        post.catch(console.log);
    }

    useEffect(() => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + userData.token
            }
        }

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
    
        const promise = axios.get(URL,config);
    
        promise.then((answer) => {
          setJson(answer.data);
        }); // if ok
    
        promise.catch((error) => {
          console.log(error.response.data);
        }); // if go bad, error
    
      }, []); // useEffect end

    if (json.length == 0 || json == undefined || json == null)
        return(
            <ContainerBase>
                <Topo/>
                <ContainerMid>
                        <MyHabitsTop>
                        <h1> Meus Hábitos </h1><button data-test="habit-create-btn" onClick={() => setCreate(true)}>+</button>
                        </MyHabitsTop>
                        
                    <ContainerCreateHabit data-test="habit-create-container" create={create}>
                        <ContainerForm>
                        <form onSubmit={createHabit}>
                            <input data-test="habit-name-input" onChange={e => setHabit(e.target.value)} placeholder="nome do hábito"></input>
                            <WeekDays daysSelecteds={daysSelecteds} setDaysSelecteds={setDaysSelecteds} setCreate={setCreate} />
                            </form>
                        <Buttons>
                            <button data-test="habit-create-cancel-btn" checked={false} onClick={() => setCreate(false)}> Cancelar </button> <button checked={true} data-test="habit-create-save-btn">Salvar</button>
                        </Buttons>
                        </ContainerForm>

                    </ContainerCreateHabit>
                    <h2> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </h2>
                </ContainerMid>
                <Menu/>
            </ContainerBase>
        )
        else 
            return (
                <ContainerBase>
                    <Topo/>
                    <ContainerMid>
                        <MyHabitsTop>
                        <h1> Meus Hábitos </h1><p>+</p>
                        </MyHabitsTop>
                        {
                        json.map(item => (
                        <ContainerHabit key={item.id}>
                            <ContainerTitleAndDays>
                                <TitleAndTrash>
                                    <h1>{item.name}</h1>
                                    <img src="../assets/Trash.png"/>
                                </TitleAndTrash>
                                <WeekDays daysSelecteds={daysSelecteds} setDaysSelecteds={setDaysSelecteds} />
                            </ContainerTitleAndDays>
                        </ContainerHabit>
                        ))
                        }
                    </ContainerMid>
                    <Menu/>
                </ContainerBase>
        )
}

const MyHabitsTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    button {
        display: flex;
        justify-content: center;
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
    display: ${props => props.create ? "flex"  : "none" };
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
    margin-bottom: 10px; 
    width: 84px;
    height: 35px;
    left: 257px;
    top: 277px;
    background: ${props => props.checked ? "#FFFFFF"  : "#52B6FF" };
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: ${props => props.checked ? "#52B6FF" : "#FFFFFF" };
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