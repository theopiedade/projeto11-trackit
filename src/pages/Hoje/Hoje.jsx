import styled from "styled-components";

export default function Hoje () {
    return (
        <ContainerBase>
            <ContainerTop>  
            
            </ContainerTop> 
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
const containerMid = styled.div`
    margin-top: 28px;
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
 const containerBottomMenu = styled.div`
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

  const containerCircle = styled.div`
    position: absolute;
    width: 91px;
    height: 91px;
    left: 80px;
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