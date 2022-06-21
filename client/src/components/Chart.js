import { VictoryPie } from "victory-pie";

const data = [
    { x: "교육비", y: 20 },
    { x: "식비", y: 35 },
    { x: "이월금", y: 10 },
    { x: "운동비", y: 25 },
    { x: "유흥비", y: 10 },
];

const Chart = () => {
    return (
        <div>
            <VictoryPie
                data={data}
                colorScale={["#F4BFBF", "#FFD9C0", "#FAF0D7", "#C2DED1", "#D0C9C0"]}
                radius={150}
                labels={({ datum }) => `${datum.x} ${datum.y} %`}
                labelPosition={"centroid"}
                labelPlacement={"vertical"}
            ></VictoryPie>
        </div>
    );
};

export default Chart;
