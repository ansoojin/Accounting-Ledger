import {
  LoginContainer,
  EngTitle,
  LeftInput,
  RightCheckBox,
  CustomizedButton,
} from "../styledComponent/style.js";
import { FiCheckCircle } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import e from "express";
function SignUp() {
  const [input, setInput] = useState(false);
  const [nameColor, changeNameColor] = useState("grey");
  const [idColor, changeIdColor] = useState("grey");
  const [nickColor, changeNickColor] = useState("grey");
  const [pwColor, changePwColor] = useState("grey");
  const [pwColor2, changePwColor2] = useState("grey");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");

  const [accountColor, changeAccountColor] = useState("grey");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    const nameCheck = /^[가-힣]{2,4}$/; // 한글 2~4자 정규식
    if (nameCheck.test(name)) changeNameColor("green");
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <LoginContainer style={{ height: "40rem", width: "30rem" }}>
      <EngTitle>Welcome</EngTitle>

      <div style={{ width: "80%", margin: "auto" }}>
        <LeftInput
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={handleNameChange}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${nameColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="text"
          placeholder="아이디를 입력해주세요"
          onChange={handleIdChange}
          onBlur={() => {
            fetch("http://localhost:8080/api/user/checkid", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: id,
              }),
            }).then((res) => {
              if (res.ok) {
                changeIdColor("green");
              } else {
                alert("중복된 아이디가 존재합니다.");
                changeIdColor("grey");
              }
            });
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${idColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={handleUserNameChange}
          onBlur={() => {
            fetch("http://localhost:8080/api/user/checkname", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userName: userName,
              }),
            }).then((res) => {
              if (res.ok) {
                changeNickColor("green");
              } else {
                alert("중복된 닉네임이 존재합니다.");
                changeNickColor("grey");
              }
            });
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${nickColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={() => {
            changePwColor("green");
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${pwColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          onChange={() => {
            changePwColor2("green");
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${pwColor2}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="text"
          placeholder="현재 계좌 잔액을 입력해주세요"
          onChange={() => {
            changeAccountColor("green");
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${accountColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
      </div>
    </LoginContainer>
  );
}

export default SignUp;
