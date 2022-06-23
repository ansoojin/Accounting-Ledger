import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Login() {
    return (
        <div className="container">
            <h2>로그인</h2>

            <input type="text" className="input-box" placeholder="ID" style={{ textAlign: "start" }}></input>
            <input type="password" className="input-box" placeholder="password" style={{ textAlign: "start" }}></input>
            <button className="btn-grad">Login</button>
            <Link to="/idsearch">
                <button className="link">아이디/비밀번호 찾기</button>
            </Link>
            <Link to="../signup">
                <button className="link">회원가입</button>
            </Link>
        </div>
    );
}

export default Login;
