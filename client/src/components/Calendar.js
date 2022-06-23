import moment from "moment";
import { useEffect, useState } from "react";
import { weekdayArray } from "../constant/constants.js";
import { Header, TitleBox, CalendarContainer, CalendarDayContainer, CalendarWeekContainer, CalendarWeekDayContainer, DayButton } from "../styledComponent/style.js";
import _ from "lodash";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import DailyExpenditure from "./DailyExpenditure.js";
import axios from "axios";

function MyCalendar() {
    const [year, changeYear] = useState(2022);
    const [month, changeMonth] = useState(6);
    let [modal, changeModal] = useState(false);
    const [events, setEvents] = useState([]);

    const startWeekday = moment().year(year).month(month).startOf("month").format("e");
    const endWeekday = moment().year(year).month(month).endOf("month").format("e");
    const endDate = parseInt(moment().year(year).month(month).endOf("month").format("DD"));

    const firstBlank = _.range(0, startWeekday);
    const lastBlank = _.range(0, 6 - endWeekday);
    const dayArray = _.range(1, endDate + 1);

    const increaseYear = () => {
        changeYear(year + 1);
        changeMonth(1);
    };

    const decreaseYear = () => {
        changeYear(year - 1);
        changeMonth(12);
    };

    const EventByUser = () => {
        useEffect(() => {
            axios.get("http://localhost:8080/api/events").then((res) => {
                setEvents(res.data);
                console.log("response data");
                console.log(res.data);
            });
        });
    };

    return (
        <>
            <Header>
                <TitleBox>
                    <BiChevronLeft
                        size="2.5rem"
                        cursor="pointer"
                        onClick={() => {
                            if (month <= 1) decreaseYear();
                            else changeMonth(month - 1);
                        }}
                    />
                </TitleBox>
                <h2>
                    {year}-{month}
                </h2>
                <TitleBox>
                    <BiChevronRight
                        size="2.5rem"
                        cursor="pointer"
                        onClick={() => {
                            if (month >= 12) increaseYear();
                            else changeMonth(month + 1);
                        }}
                    />
                </TitleBox>
            </Header>
            <CalendarContainer>
                {modal === true ? <DailyExpenditure /> : null}
                <CalendarWeekContainer>
                    {weekdayArray.map((weekday, idx) => (
                        <CalendarWeekDayContainer key={idx}>{weekday}</CalendarWeekDayContainer>
                    ))}
                    {firstBlank.map((day, idx) => (
                        <CalendarDayContainer key={idx}>{}</CalendarDayContainer>
                    ))}
                    {dayArray.map((day, idx) => (
                        <CalendarDayContainer key={idx}>
                            <DayButton
                                onClick={(data) => {
                                    changeModal(modal === true ? false : true);
                                }}
                            >
                                {day}
                            </DayButton>
                            <p style={{ textAlign: "right", fontSize: "0.9rem", color: "#f47c7c" }}>-1,000</p>
                            <p style={{ textAlign: "right", fontSize: "0.9rem", color: "#54BAB9" }}>+10,000</p>
                        </CalendarDayContainer>
                    ))}
                    {lastBlank.map((day, idx) => (
                        <CalendarDayContainer key={idx}>{}</CalendarDayContainer>
                    ))}
                </CalendarWeekContainer>
            </CalendarContainer>
        </>
    );
}

export default MyCalendar;
