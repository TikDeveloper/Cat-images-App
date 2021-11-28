import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

function Chart() {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 1000 },
    { name: 'Page B', uv: 1200, pv: 500, amt: 2000 },
    { name: 'Page C', uv: 200, pv: 1566, amt: 3000 },
    { name: 'Page D', uv: 600, pv: 2500, amt: 4000 },
  ];

  return (
    <LineChart
      width={800}
      height={300}
      data={data}
      margin={{ top: 5, right: 25, left: 35, bottom: 5 }}
    >
      <CartesianGrid stroke='#fff' strokeDasharray='5 5' vertical={false} />
      <XAxis
        dataKey='name'
        stroke='#fff'
        axisLine={false}
        tickLine={false}
        tickMargin={15}
      />
      {/* <YAxis stroke='#fff' /> */}
      <Tooltip />
      {/* <Legend verticalAlign='top' height={36} /> */}
      <Line type='monotone' dataKey='uv' stroke='#FF9671' />
      <Line type='monotone' dataKey='pv' stroke='#00C9A7' />
    </LineChart>
  );
}

export default Chart;
