import styled from "styled-components";
import Context from "../../Context";
import { useContext} from "react";

export default function Topo () {
    const [userData, setUserData] = useContext(Context);
    return (
        <div data-test="header">
        <ContainerTop>  
            <h1>TrackIt</h1>
            <img data-test="avatar" src={userData.image} alt="User Image"/>
        </ContainerTop> 
        </div>
    )
}

  
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