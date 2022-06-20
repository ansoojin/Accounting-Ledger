import moment from "moment";
import { useState } from "react";
import { weekdayArray } from "../constant/constants.js";
import { Header, TitleBox, CalendarContainer, CalendarDayContainer, CalendarWeekContainer, CalendarWeekDayContainer } from "../styledComponent/style.js";
import _ from "lodash";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function MyCalendar() {
    const [year, changeYear] = useState(2022);
    const [month, changeMonth] = useState(6);

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
                <CalendarWeekContainer>
                    {weekdayArray.map((weekday, idx) => (
                        <CalendarWeekDayContainer key={idx}>{weekday}</CalendarWeekDayContainer>
                    ))}
                    {firstBlank.map((day, idx) => (
                        <CalendarDayContainer key={idx}>{}</CalendarDayContainer>
                    ))}
                    {dayArray.map((day, idx) => (
                        <CalendarDayContainer key={idx}>{day}</CalendarDayContainer>
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
