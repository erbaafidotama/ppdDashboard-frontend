import React, { useState } from 'react';
import {
    PieChart, Pie, Sector, ResponsiveContainer
  } from 'recharts';

export default function PieCharts(props) {
  console.log(props);
    const [activeIndex, setActiveIndex] = useState({});
    function getInitialState() {
        return {
          activeIndex: 0,
        };
      }
    
      function onPieEnter(data, index) {
        setActiveIndex(index);
      }
    const data = props.data;
                  console.log(data);

                  const renderActiveShape = (props) => {
                    const RADIAN = Math.PI / 180;
                    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
                      fill, payload, percent, value } = props;
                    const sin = Math.sin(-RADIAN * midAngle);
                    const cos = Math.cos(-RADIAN * midAngle);
                    const sx = cx + (outerRadius + 10) * cos;
                    const sy = cy + (outerRadius + 10) * sin;
                    const mx = cx + (outerRadius + 30) * cos;
                    const my = cy + (outerRadius + 30) * sin;
                    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
                    const ey = my;
                    const textAnchor = cos >= 0 ? 'start' : 'end';
                  
                    return (
                      <g>
                        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={'white'}>{payload.name}</text>
                        <Sector
                          cx={cx}
                          cy={cy}
                          innerRadius={innerRadius}
                          outerRadius={outerRadius}
                          startAngle={startAngle}
                          endAngle={endAngle}
                          fill={'#b000ff'}
                        />
                        <Sector
                          cx={cx}
                          cy={cy}
                          startAngle={startAngle}
                          endAngle={endAngle}
                          innerRadius={outerRadius + 6}
                          outerRadius={outerRadius + 10}
                          fill={fill}
                        />
                        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
                        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
                        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Jumlah: ${value}`}</text>
                        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                          {`(Rate ${(percent * 100).toFixed(2)}%)`}
                        </text>
                      </g>
                    );
                  };

  return (
    <ResponsiveContainer height={300} width="95%">
    <PieChart width={700} height={700}>
        <Pie 
        	activeIndex={activeIndex}
          activeShape={renderActiveShape} 
          data={data} 
          cx="50%" 
          cy="50%" 
          innerRadius="62%"
          outerRadius="70%"
          fill="#001eff"
          onMouseEnter={onPieEnter}
        />
       </PieChart>
       </ResponsiveContainer>
  );
}