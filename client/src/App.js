import { NavBar, NavBarButton } from "./styledComponent/style.js";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import MyCalendar from "./components/Calendar.js";
import IDSearch from "./components/IDSearch.js";
import PWSearch from "./components/PWSearch.js";
import SignUp from "./components/SignUp.js";
import Profile from "./components/Profile.js";
import DailyExpenditure from "./components/DailyExpenditure.js";
import Stats from "./components/Stats.js";

function App() {
    return (
        <>
            <NavBar>
                <NavBarButton>HOME</NavBarButton>
                <NavBarButton>CALENDAR</NavBarButton>
                <NavBarButton>STATS</NavBarButton>
                <NavBarButton>PROFILE</NavBarButton>
            </NavBar>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<MyCalendar />} />
                <Route path="/idsearch" element={<IDSearch />}></Route>
                <Route path="/pwsearch" element={<PWSearch />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/daily" element={<DailyExpenditure />}></Route>
                <Route path="/stats" element={<Stats />}></Route>
            </Routes>
        </>
    );
}

export default App;
