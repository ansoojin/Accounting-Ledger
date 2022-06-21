import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
    const data = [
        { title: "교육비", value: 20, color: "#F4BFBF" },
        { title: "식비", value: 35, color: "#FFD9C0" },
        { title: "이월금", value: 10, color: "#FAF0D7" },
        { title: "운동비", value: 25, color: "#C2DED1" },
        { title: "유흥비", value: 10, color: "#D0C9C0" },
    ];
    return <PieChart data={data} totalValue={100} viewBoxSize={[300, 300]} animate></PieChart>;
};

export default Chart;
