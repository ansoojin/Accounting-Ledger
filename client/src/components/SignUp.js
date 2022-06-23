import { LoginContainer, EngTitle, LeftInput, RightCheckBox, CustomizedButton } from "../styledComponent/style.js";
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

    const [accountColor, changeAccountColor] = useState("grey");

    return (
        <LoginContainer style={{ height: "40rem", width: "30rem" }}>
            <EngTitle>Welcome</EngTitle>

            <div style={{ width: "80%", margin: "auto" }}>
                <LeftInput
                    type="text"
                    placeholder="이름을 입력해주세요"
                    onChange={() => {
                        changeNameColor("green");
                    }}
                ></LeftInput>
                <RightCheckBox>
                    <IconContext.Provider value={{ color: `${nameColor}` }}>
                        <FiCheckCircle />
                    </IconContext.Provider>
                </RightCheckBox>
                <LeftInput
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    onChange={() => {
                        changeIdColor("green");
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
                    onChange={() => {
                        changeNickColor("green");
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
