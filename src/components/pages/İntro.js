import React from "react";
import { LineChart, Line } from "recharts";


const data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",

    pv: 1398,
  },
  {
    name: "Page C",

    pv: 9800,
  },
  {
    name: "Page D",

    pv: 3908,
  },
  {
    name: "Page E",

    pv: 4800,
  },
  {
    name: "Page F",

    pv: 3800,
  },
  {
    name: "Page G",
  },
]

class İntro extends React.Component {
  render() {
    return (
        <div className="intro">
          <h2>Ayda 2 kez</h2>
          <h3>Mail kutunu kontrol etmeyi unutma !</h3>
        </div>
    );
  }
}

export default İntro;
