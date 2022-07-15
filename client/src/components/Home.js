import { BackgroundWrap1, BackgroundWrap2, BackgroundWrap3, BackgroundWrap4, BackgroundWrap5, BackgroundWrap6, Content, Text } from "../styledComponent/animation";
import { CustomizedButton } from "../styledComponent/style";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <BackgroundWrap1>
                <Content>
                    <h2 style={{ color: "White" }}>Happy Salary Day~~!</h2>
                </Content>
            </BackgroundWrap1>

            <BackgroundWrap2>
                <Content>
                    <h2 style={{ color: "White" }}>Buy for me! Splash out!</h2>
                </Content>
            </BackgroundWrap2>
            <BackgroundWrap3>
                <Content>
                    <h2 style={{ color: "black" }}>Hmm.. I am broke..</h2>
                </Content>
            </BackgroundWrap3>

            <BackgroundWrap6>
                <Content>
                    <h2 style={{ color: "black" }}>So...Sad...</h2>
                </Content>
            </BackgroundWrap6>
            
            <BackgroundWrap4>
                <Content>
                    <h2 style={{ color: "black" }}>I made up my mind to write an accounting ledger!</h2>
                </Content>
            </BackgroundWrap4>
            <BackgroundWrap5>
                <Content>
                    <h2 style={{ color: "black" }}>Awesome!</h2>
                </Content>
            </BackgroundWrap5>
            <Link to="/calendar" style={{ textDecoration: "none" }}>
                <CustomizedButton style={{ width: "20%", borderRadius: "1.5rem", marginBottom: "2rem" }}>Get Started</CustomizedButton>
            </Link>
        </div>
    );
}

export default Home;
