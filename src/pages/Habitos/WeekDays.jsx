import { useState, useEffect } from "react";
import styled from "styled-components";

export default function WeekDays({days, daysChecked, setDaysChecked, countHabits}) {
    const week = ['D','S','T','Q','Q','S','S'];
 
   
    useEffect(() => {
        if (days != undefined) { 
            setDaysChecked(days)
            console.log("daysChecked atualizado para "+days);
        }
    }, []);
    console.log("daysChecked "+daysChecked);

    function checked(props) {
        let numCheck = props + 1;
        if (daysChecked.indexOf(numCheck) != -1) return true;
        else return false;
    }

    function dayCheck(props) {
        if (countHabits === 0) {}
    }    

    return (
    <WeekDaysContainer>
        {
        week.map((day, i) => (
            <WeekDay key={i} checked={checked(i)} onClick={dayCheck(i)}>{day}</WeekDay>
        ))
        }
    </WeekDaysContainer>
 )
}

const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const WeekDay = styled.div`
    margin-right: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 30px;
    height: 30px;
    background: ${props => props.checked ? "#CFCFCF" : "#FFFFFF" };
    border: 1px solid ${props => props.checked ? "#CFCFCF" : "#D4D4D4" };
    border-radius: 5px;
    color: ${props => props.checked ? "#FFFFFF" : "#DBDBDB" };
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    text-align: center;
`