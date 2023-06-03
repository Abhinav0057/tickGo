import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  ReferenceLine,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const TicketCountChart = ({ ticketCounts }) => {
  // Transform ticket count data into an array of objects
  const data = Object.keys(ticketCounts)
    .map((eventID) => {
      const ticketData = ticketCounts[eventID];
      return Object.keys(ticketData).map((ticketID) => ({
        eventID,
        ticketID,
        sold: ticketData[ticketID].sold,
        left: ticketData[ticketID].left,
        name: ticketData[ticketID].name,
        price: ticketData[ticketID].price,
        revenue:
          ticketData[ticketID].sold * parseInt(ticketData[ticketID].price),
      }));
    })
    .flat();

  const revenueData = data.map(({ name, revenue }) => ({
    name,
    value: revenue,
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF1919",
  ];

  return (
    <div className="">
      <h2>Ticket Counts</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sold" fill="#8884d8" name="Sold" />
          <Bar dataKey="left" fill="#82ca9d" name="Left" />
          {data.map(({ ticketID, name, sold, left }) => (
            <ReferenceLine key={ticketID} y={sold + left} stroke="transparent">
              <text x={name} y={sold + left + 10} textAnchor="middle">
                {name}
              </text>
            </ReferenceLine>
          ))}
        </BarChart>
      </ResponsiveContainer>

      <h2>Revenue Generated</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={revenueData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {revenueData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TicketCountChart;
