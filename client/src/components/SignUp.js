import { LoginContainer, EngTitle, LeftInput, RightCheckBox, CustomizedButton } from "../styledComponent/style.js";
import { FiCheckCircle } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
function SignUp() {
    return (
        <LoginContainer style={{ height: "40rem", width: "30rem" }}>
            <EngTitle>Welcome</EngTitle>

            <div style={{ width: "80%", margin: "auto" }}>
                <LeftInput type="text" placeholder="이름을 입력해주세요"></LeftInput>
                <RightCheckBox>
                    <IconContext.Provider value={{ color: "green" }}>
                        <FiCheckCircle />
                    </IconContext.Provider>
                </RightCheckBox>
                <LeftInput type="text" placeholder="아이디를 입력해주세요"></LeftInput>
                <RightCheckBox>
                    <IconContext.Provider value={{ color: "green" }}>
                        <FiCheckCircle />
                    </IconContext.Provider>
                </RightCheckBox>
                <LeftInput type="text" placeholder="닉네임을 입력해주세요"></LeftInput>
                <RightCheckBox>
                    <IconContext.Provider value={{ color: "green" }}>
                        <FiCheckCircle />
                    </IconContext.Provider>
                </RightCheckBox>
                <LeftInput type="password" placeholder="비밀번호를 입력해주세요"></LeftInput>
                <RightCheckBox>
                    <IconContext.Provider value={{ color: "green" }}>
                        <FiCheckCircle />
                    </IconContext.Provider>
                </RightCheckBox>
                <LeftInput type="password" placeholder="비밀번호를 다시 입력해주세요"></LeftInput>
                <RightCheckBox>
                    <IconContext.Provider value={{ color: "green" }}>
                        <FiCheckCircle />
                    </IconContext.Provider>
                </RightCheckBox>
                <LeftInput type="text" placeholder="현재 계좌 잔액을 입력해주세요"></LeftInput>
                <RightCheckBox>
                    <IconContext.Provider value={{ color: "green" }}>
                        <FiCheckCircle />
                    </IconContext.Provider>
                </RightCheckBox>
            </div>
        </LoginContainer>
    );
}

export default SignUp;
