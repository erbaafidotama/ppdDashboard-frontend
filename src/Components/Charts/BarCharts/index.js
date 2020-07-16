import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';

export default function BarCharts(props) {
    
      const dataChart = props.data

  return (
    <ResponsiveContainer height={300} width="95%">
    <BarChart
        width={800}
        height={300}
        data={dataChart}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="nm_barang" tick={{ fill: 'white' }} />
        <YAxis tick={{ fill: 'white' }} width={40} /> 
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="jumlah" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
  );
}