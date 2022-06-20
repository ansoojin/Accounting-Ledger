import styled from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
`;

export const CalendarWeekContainer = styled.div`
    display: grid;
    width: 80vw;
    max-width: 1000px;
    margin-top: 4rem;
    grid-template-columns: repeat(7, auto);
`;

export const CalendarWeekDayContainer = styled.div`
    height: 2rem;
    color: #000;
    text-align: center;
    line-height: 2rem;
`;

export const CalendarDayContainer = styled.div`
    border: 1px solid #dedede;
    height: 5rem;
    color: #000;
    text-align: right;
    padding: 10px;
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const TitleBox = styled.div`
    margin-top: 0.8rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: start;
`;

export const NavBarButton = styled.button`
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    padding: 0.1rem;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: #ef9f9f;
    }
`;
