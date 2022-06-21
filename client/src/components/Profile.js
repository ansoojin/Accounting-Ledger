import { LeftBox, LoginContainer, ModifyButton, RightBox } from "../styledComponent/style.js";
import TypingText from "./TypingText.js";

function Profile() {
    return (
        <>
            <TypingText text="신재훈님 화이팅입니다!" speed="120" fontSize="2rem" color="black"></TypingText>
            <LoginContainer>
                <h2>Profile</h2>
                <div style={{ width: "80%", margin: "auto" }}>
                    <LeftBox>이름 : </LeftBox>
                    <RightBox>안수진</RightBox>
                    <LeftBox>아이디 : </LeftBox>
                    <RightBox>asj0816</RightBox>
                    <LeftBox>닉네임 : </LeftBox>
                    <RightBox>aiccuracy</RightBox>
                    <LeftBox>잔액 : </LeftBox>
                    <RightBox>1,000,000</RightBox>
                    <LeftBox>이메일 : </LeftBox>
                    <RightBox>asj0816@korea.ac.kr</RightBox>
                    <div>
                        <ModifyButton>회원 정보 수정</ModifyButton>
                        <ModifyButton>회원 탈퇴</ModifyButton>
                    </div>
                </div>
            </LoginContainer>
        </>
    );
}

export default Profile;
