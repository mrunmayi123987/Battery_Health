import { LineChart, Line,XAxis,YAxis,Tooltip}from "recharts";
function Graph({ data}) {
    return(
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="time"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="Voltage" stroke="#3B82F6"/>
            <Line type="monotone" dataKey="Current" stroke="#22C55E"/>
            <Line type="monotone" dataKey="Temperature" stroke="#EF4444"/>

        </LineChart>
    );
}

export default Graph;