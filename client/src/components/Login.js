import React from "react";

import "../App.css";

function Login() {
    return (
        <div className="container">
            <h2>로그인</h2>

            <input type="text" className="input-box" placeholder="ID"></input>
            <input type="password" className="input-box" placeholder="password"></input>
            <button className="btn-grad">Login</button>
            <button className="link">아이디/비밀번호 찾기</button>
            <button className="link">회원가입</button>
        </div>
    );
}

export default Login;
