import { useState, useEffect, useRef } from "react";
import { DailyExpContainer, ExpContent, ExpTitle, Header, LoginContainer, MiddleContainer, TitleBox } from "../styledComponent/style";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import moment from "moment";

function DailyExpenditure() {
    const [year, changeYear] = useState(2022);
    const [month, changeMonth] = useState(6);
    const [day, changeDay] = useState(1);
    let endOfMonth = moment().year(year).month(month).endOf("month").format("DD");
    const modalRef = useRef();

    const increaseDate = () => {
        // day + 1이 그달을 넘긴 경우만 여기로 들어옴
        if (month + 1 > 12) {
            changeYear(year + 1);
            changeMonth(1);
            changeDay(1);
        } else {
            // month만 늘리면 됨
            changeMonth(month + 1);
            changeDay(1);
        }
    };

    const decreaseDate = () => {
        // day - 1이 0인 경우부터 여기를 들어옴
        if (month - 1 === 0) {
            // year 도 줄이자!
            changeYear(year - 1);
            changeMonth(12);
            endOfMonth = moment().year(year).month(month).endOf("month").format("DD");
            changeDay(endOfMonth);
        } else {
            // month 만 줄이면 된다.
            changeMonth(month - 1);
            endOfMonth = moment().year(year).month(month).endOf("month").format("DD");
            changeDay(endOfMonth);
        }
    };

    return (
        <LoginContainer>
            <Header>
                <TitleBox>
                    <BiChevronLeft
                        size="2rem"
                        cursor="pointer"
                        onClick={() => {
                            if (day <= 1) decreaseDate();
                            else changeDay(day - 1);
                        }}
                    />
                </TitleBox>
                <h2 style={{ fontSize: "1.25rem" }}>
                    {year}-{month}-{day}
                </h2>
                <TitleBox>
                    <BiChevronRight
                        size="2rem"
                        cursor="pointer"
                        onClick={() => {
                            if (day >= endOfMonth) increaseDate();
                            else changeDay(day + 1);
                        }}
                    />
                </TitleBox>
            </Header>
            <DailyExpContainer>
                <ExpTitle>분류</ExpTitle>
                <ExpTitle>내용</ExpTitle>
                <ExpTitle>금액</ExpTitle>
            </DailyExpContainer>
            <DailyExpContainer>
                <ExpContent>식비</ExpContent>
                <ExpContent>고른햇살</ExpContent>
                <ExpContent>-8,000</ExpContent>
            </DailyExpContainer>
            <DailyExpContainer>
                <ExpContent>교통비</ExpContent>
                <ExpContent>학교 가는길</ExpContent>
                <ExpContent>-2,500</ExpContent>
            </DailyExpContainer>
            <DailyExpContainer>
                <ExpContent>식비</ExpContent>
                <ExpContent>카페인 수혈</ExpContent>
                <ExpContent>-1,500</ExpContent>
            </DailyExpContainer>
        </LoginContainer>
    );
}

export default DailyExpenditure;
