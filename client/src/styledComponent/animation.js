import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

import "./animation.css";

const bounceAnimation = keyframes`${bounce}`;
export const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation} infinite;
`;

export const Bounce = styled.div`
    animation: 4s ${keyframes`${bounce}`} infinite;
`;


export const LandingPage = () => {
    const img1 = "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
    const img2 = "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    const img3 = "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    const img4 = "https://images.unsplash.com/photo-1554672723-b208dc85134f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

    return (
        <div>
            <div className="img-box">
                <img
                    height="70%"
                    width="80%"
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />{" "}
            </div>
            <div className="img-box">
                <img
                    height="70%"
                    width="80%"
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />{" "}
            </div>
            <div className="img-box">
                <img
                    height="70%"
                    width="80%"
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />{" "}
            </div>
            <div className="img-box">
                <img
                    height="70%"
                    width="80%"
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />{" "}
            </div>
        </div>
    );
};

export const WrapImage = styled.div`
    width: 80%;
    margin: 1rem auto;
    position: relative;
`;

export const HomeText = styled.h3`
    padding: 5px 10px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1000;
`;

export const BackgroundWrap1 = styled.div`
    background-image: url("/assets/earn_money.jpg");
    background-size: 1000px 600px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    margin: auto;
    margin-bottom: 0.1rem;
    opacity: 0.7;
    margin-top: 12rem;
    margin-bottom: 15rem;
`;

export const BackgroundWrap2 = styled.div`
    background-image: url("/assets/pay_money.jpg");
    background-size: 1000px 600px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    opacity: 0.7;
    margin-bottom: 0.1rem;
    margin-top: 12rem;
    margin-bottom: 15rem;
`;

export const BackgroundWrap3 = styled.div`
    background-image: url("/assets/no_money.jpg");
    background-size: 1000px 600px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 600px;
    opacity: 0.7;
    margin-top: 12rem;
    margin-bottom: 15rem;
`;

export const BackgroundWrap4 = styled.div`
    background-image: url("/assets/write_ledger.jpg");
    background-size: 1000px 600px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    margin-bottom: 0.1rem;
    opacity: 0.7;
    margin-top: 12rem;
    margin-bottom: 15rem;
`;

export const BackgroundWrap5 = styled.div`
    background-image: url("/assets/growing_money.jpg");
    background-size: 1000px 600px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    margin-bottom: 0.1rem;
    opacity: 0.7;
    margin-top: 12rem;
    margin-bottom: 15rem;
`;

export const BackgroundWrap6 = styled.div`
    background-image: url("/assets/upset.jpg");
    background-size: 1000px 600px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    margin-bottom: 0.1rem;
    opacity: 0.7;
    margin-top: 10rem;
    margin-bottom: 15rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.span`
    color: white;
    padding-top: 30px;
    font-family: "Anek Latin", sans-serif;
`;
