import styled from "styled-components";
import Context from "../../Context";
import { useContext} from "react";
import { useNavigate} from 'react-router-dom';

export default function Menu () {
    const navigate = useNavigate();
    const [userData, setUserData] = useContext(Context);
    return (
        <div data-test="menu">
            <ContainerBottomMenu>
        
            <h1 data-test="habit-link" onClick={() => navigate("/habitos")}>Hábitos</h1>
            <ContainerCircle> <div data-test="today-link" onClick={() => navigate("/hoje")}>Hoje</div> </ContainerCircle>
            <h1 data-test="history-link" onClick={() => navigate("/historico")}>Histórico</h1>
    
            </ContainerBottomMenu>
        </div>
    );
}


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