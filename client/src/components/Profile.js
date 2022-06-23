import { LeftBox, LoginContainer, ModifyButton, RightBox, RightInput, Modal } from "../styledComponent/style.js";
import TypingText from "./TypingText.js";

function Profile() {
    return (
        <>
            <LoginContainer>
                <h2>Profile</h2>
                <div style={{ width: "80%", margin: "auto" }}>
                    <LeftBox>이름 : </LeftBox>
                    <RightBox>안수진</RightBox>
                    <LeftBox>아이디 : </LeftBox>
                    <RightBox>asj0816</RightBox>
                    <LeftBox>닉네임 : </LeftBox>
                    <RightBox>aiccuracy</RightBox>
                    <LeftBox>이메일 : </LeftBox>
                    <RightBox>asj0816@korea.ac.kr</RightBox>
                    <LeftBox>잔액 : </LeftBox>
                    <RightInput placeholder="1,000,000"></RightInput>
                </div>
                {/* <ModifyButton>회원 정보 수정</ModifyButton> */}
            </LoginContainer>
        </>
    );
}

export default Profile;
