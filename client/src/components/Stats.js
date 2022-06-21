import Chart from "./Chart.js";
import { LeftBox, LeftSummary, RightBox, RightSummary, StatChart, StatContainer, StatDetail, TotalSummary } from "../styledComponent/style.js";

import { BiCaretUp, BiCaretDown } from "react-icons/bi";

function Stats() {
    return (
        <StatContainer>
            <StatChart>
                <Chart />
            </StatChart>
            <StatDetail>
                <h2>이달의 Summary</h2>
                <LeftSummary>이달의 수입</LeftSummary>
                <RightSummary>10,000,000</RightSummary>
                <LeftSummary>이달의 지출</LeftSummary>
                <RightSummary>4,500,000</RightSummary>
                <div style={{ border: "0.5px solid black", float: "left", width: "80%", marginLeft: "1.3rem", marginRight: "0.8rem", marginBottom: "0.5rem" }}></div>
                <LeftSummary>
                    <b>잔액</b>
                </LeftSummary>
                <RightSummary>
                    <b>5,500,000</b>
                </RightSummary>
                <TotalSummary>
                    {" "}
                    <BiCaretUp style={{ paddingTop: "0.1rem", color: "#f47c7c", marginRight: "0.15rem", fontSize: "1.3rem" }} />
                    전월 대비 25% 지출 증가
                </TotalSummary>
                <TotalSummary style={{ marginTop: "0.1rem", paddingTop: "0.1rem", marginRight: "0.15rem" }}>
                    {" "}
                    <BiCaretDown style={{ color: "#8CC0DE", fontSize: "1.3rem", marginTop: "0" }} />
                    전월 대비 25% 지출 감소
                </TotalSummary>
            </StatDetail>
        </StatContainer>
    );
}

export default Stats;
