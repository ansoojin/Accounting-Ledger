import { NavBar, NavBarButton } from "./styledComponent/style.js";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import MyCalendar from "./components/Calendar.js";

function App() {
    return (
        <>
            <NavBar>
                <NavBarButton>HOME</NavBarButton>
                <NavBarButton>CALENDAR</NavBarButton>
                <NavBarButton>STATS</NavBarButton>
            </NavBar>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<MyCalendar />} />
            </Routes>
        </>
    );
}

export default App;
