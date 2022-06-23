import { BlankBar, LeftBarButton, LeftMenu, MenuBar, NavBar, NavBarButton, ProfileNavBar, Section } from "./styledComponent/style.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login.js";
import MyCalendar from "./components/Calendar.js";
import IDSearch from "./components/IDSearch.js";
import PWSearch from "./components/PWSearch.js";
import SignUp from "./components/SignUp.js";
import Profile from "./components/Profile.js";
import DailyExpenditure from "./components/DailyExpenditure.js";
import Stats from "./components/Stats.js";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "./components/Home.js";

function App() {
    // const sendRequest = async () => {
    //     const response = await axios.get("http://localhost:8080");
    //     console.log(response);
    //     console.log(response.data);
    // };

    // useEffect(() => {
    //     sendRequest();
    // }, []);

    return (
        <>
            {/* <NavBar>
                <NavBarButton>HOME</NavBarButton>
                <Link to="/calendar">
                    <NavBarButton>CALENDAR</NavBarButton>
                </Link>
                <Link to="/stats">
                    <NavBarButton>STATS</NavBarButton>
                </Link>
                <Link to="/profile">
                    <NavBarButton>PROFILE</NavBarButton>
                </Link>
                <Link to="/login">
                    <ProfileNavBar>LOGIN</ProfileNavBar>
                </Link>
                <Link to="/signup">
                    <ProfileNavBar>SIGN UP</ProfileNavBar>
                </Link>
            </NavBar> */}

            <Section>
                <Link to="/">
                    <LeftMenu>HOME</LeftMenu>
                </Link>
                <Link to="/calendar">
                    <LeftMenu>CALENDAR</LeftMenu>
                </Link>
                <Link to="/stats">
                    <LeftMenu>STATS</LeftMenu>
                </Link>

                <Link to="/profile">
                    <LeftMenu>PROFILE</LeftMenu>
                </Link>
                <BlankBar></BlankBar>
                <Link to="/login">
                    <ProfileNavBar>LOGIN</ProfileNavBar>
                </Link>

                <Link to="signup">
                    <ProfileNavBar>SIGNUP</ProfileNavBar>
                </Link>
            </Section>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/calendar" element={<MyCalendar />} />
                <Route path="/idsearch" element={<IDSearch />}></Route>
                <Route path="/pwsearch" element={<PWSearch />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/daily" element={<DailyExpenditure />}></Route>
                <Route path="/stats" element={<Stats />}></Route>
                <Route path="/idsearch" element={<IDSearch />}></Route>
                <Route path="/pwsearch" element={<PWSearch />}></Route>
            </Routes>
        </>
    );
}

export default App;
