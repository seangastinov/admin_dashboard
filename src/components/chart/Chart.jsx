import "./chart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({aspect, title}) => {
    let data = [
        {name: 'Jul', total: 7500},
        {name: 'Aug', total: 15000},
        {name: 'Sep', total: 9000},
        {name: 'Oct', total: 10000},
        {name: 'Nov', total: 12000},
        {name: 'Dec', total: 8000},
    ];
    return (
        <div className={"chart"}>
            <div className={"title"}>{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730}
                           height={250}
                           data={data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="grey"/>
                    <CartesianGrid strokeDasharray="3 3" className={"chartGrid"}/>
                    <Tooltip />
                    {/*<Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />*/}
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorTotal)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;