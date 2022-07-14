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
function SignUp() {
  const [input, setInput] = useState(false);
  const [nameColor, changeNameColor] = useState("grey");
  const [idColor, changeIdColor] = useState("grey");
  const [nickColor, changeNickColor] = useState("grey");
  const [pwColor, changePwColor] = useState("grey");
  const [pwColor2, changePwColor2] = useState("grey");

  const [values, setValues] = useState({
    id: "",
    name: "",
    userName: "",
    password: "",
    password2: "",
  });

  const [accountColor, changeAccountColor] = useState("grey");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateName = (e) => {
    const nameCheck = /^[가-힣]{2,4}$/; // 한글 2~4자 정규식
    if (nameCheck.test(e.target.value)) changeNameColor("green");
    else changeNameColor("grey");
  };

  // 영문자로 시작하는 영문자 또는 숫자 6 ~ 12자 
  const validateId = (id) => {
    var regExp = /^[a-z]+[a-z0-9]{5,11}$/g;
    return regExp.test(id);
  };

  // 한글, 숫자, 영문자 2 ~ 12자
  const validateNick = (nick) => {
    var regExp = /^[가-힣a-zA-Z0-9]{2,12}$/g;
    return regExp.test(nick);
  }

  // 8 ~ 12자 영문, 숫자, 특수문자를 최소 한가지씩 조합
  const validatePw = (password) => {
    var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/g;
    return regExp.test(password);
  }

  return (
    <LoginContainer style={{ height: "50rem", width: "43rem" }}>
      <EngTitle>Welcome</EngTitle>

      <div style={{ width: "90%", margin: "auto" }}>
        <LeftInput
          name="name"
          value={values.name}
          type="text"
          placeholder="이름을 입력해주세요 (한글 2 ~ 4자)"
          onChange={handleChange}
          onBlur={validateName}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${nameColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="text"
          value={values.id}
          name="id"
          placeholder="아이디를 입력해주세요 (영문자로 시작하는 영문자 또는 숫자 6자 ~ 12자)"
          onChange={handleChange}
          onBlur={() => {
            fetch("http://localhost:8080/api/user/checkid", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: values.id,
              }),
            }).then((res) => (res.json())
            .then((json) => {
              if (json.available === 'true' && validateId(values.id)) {
                changeIdColor("green");
              } else if (json.available === 'false' && validateId(values.id)) {
                alert("중복된 아이디가 존재합니다.");
                changeIdColor("grey");
              } else {
                changeIdColor("grey");
              }
            }))
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${idColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="text"
          value={values.userName}
          name="userName"
          placeholder="닉네임을 입력해주세요 (한글, 숫자, 영문자 2 ~ 12자)"
          onChange={handleChange}
          onBlur={() => {
            fetch("http://localhost:8080/api/user/checkname", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userName: values.userName,
              }),
            }).then((res) => (res.json())
            .then((json) => {
              if (json.available === 'true' && validateNick(values.userName)) {
                changeNickColor("green");
              } else if (json.available === 'false' && validateNick(values.userName)) {
                alert("중복된 닉네임이 존재합니다.");
                changeNickColor("grey");
              } else {
                changeNickColor("grey");
              }
            }))
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${nickColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="password"
          value={values.password}
          name="password"
          placeholder="비밀번호를 입력해주세요 (8 ~ 12자 영문, 숫자, 특수문자 최소 한가지)"
          onChange={handleChange}
          onBlur={() => {
            if (validatePw(values.password)) {
              changePwColor("green");
            } else {
              changePwColor("grey");
            }
          }}
        ></LeftInput>
        <RightCheckBox>
          <IconContext.Provider value={{ color: `${pwColor}` }}>
            <FiCheckCircle />
          </IconContext.Provider>
        </RightCheckBox>
        <LeftInput
          type="password"
          value={values.password2}
          name="password2"
          placeholder="비밀번호를 다시 입력해주세요"
          onChange={handleChange}
          onBlur={()=>{
            if (values.password === values.password2) {
              changePwColor2("green");
            } else {
              changePwColor2("grey");
            }
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
