import { NavBar, NavBarButton } from "./styledComponent/style.js";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import MyCalendar from "./components/Calendar.js";
import IDSearch from "./components/IDSearch.js";
import PWSearch from "./components/PWSearch.js";

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
                <Route path="/idsearch" element={<IDSearch />}></Route>
                <Route path="/pwsearch" element={<PWSearch />}></Route>
            </Routes>
        </>
    );
}

export default App;
