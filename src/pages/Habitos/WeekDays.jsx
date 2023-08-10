import { useState, useEffect } from "react";
import styled from "styled-components";

export default function WeekDays({daysSelecteds, setDaysSelecteds, setCreate}) {
    const daysOfWeek = ['D','S','T','Q','Q','S','S'];
    const [daysChecked, setDaysChecked] = useState([false,false,false,false,false,false,false]);



    useEffect(() => {
        let arrDaysChecked = daysChecked;
        daysChecked.map((day,i) => {
                if (daysSelecteds.indexOf(i) !== -1) {
                    arrDaysChecked[i] = true;
                }
            })
        setDaysChecked(arrDaysChecked);
    }, []);

    function selectDay(event, props) {
        event.preventDefault();
        let arrDaysChecked = daysChecked;
        if (daysChecked[props] === false) {
            arrDaysChecked[props] = true;
            setDaysChecked(arrDaysChecked);
            setCreate(true);
            setDaysSelecteds([...daysSelecteds,props+1]);
        }
    }

    return (
        <WeekDaysContainer>
            {
            daysOfWeek.map((day,i) => (
                <Day key={i} data-test="habit-day" checked={daysChecked[i]} onClick={(event) => selectDay(event,i)}>
                    {day}
                </Day>
            ))
             }
        </WeekDaysContainer>
    )
}

const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Day = styled.button`
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

