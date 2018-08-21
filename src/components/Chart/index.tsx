import * as React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  // YAxis,
} from 'recharts';

import IChart from './IChart'

import './Chart.css'

const documentWidth = document.documentElement.offsetWidth

class Chart extends React.Component<IChart, {}> {
  public static defaultProps = {
    data: [
      { name: 'Jan', recebido: 4000, pv: 2400, amt: 2400 },
      { name: 'Fev', recebido: 3000, pv: 1398, amt: 2210 },
      { name: 'Mar', recebido: 2000, pv: 9800, amt: 2290 },
      { name: 'Apr', recebido: 2780, pv: 3908, amt: 2000 },
      { name: 'May', recebido: 1890, pv: 4800, amt: 2181 },
      { name: 'Jun', recebido: 2390, pv: 3800, amt: 2500 },
      { name: 'Jul', recebido: 3490, pv: 4300, amt: 2100 },
    ],
    dataKey: 'name',
    height: 200,
    margin: { top: 10, right: 14, left: 14, bottom: 0 },
    width: documentWidth || 360,
  }

  public render () {
    const {
      data,
      dataKey,
      height,
      margin,
      width
    } = this.props
    return (
      <div
        className="Chart--wrapper">
        <AreaChart
          width={width}
          height={height}
          data={data}
          margin={margin}>
          <CartesianGrid
            strokeDasharray="3 3" />
          <XAxis
            dataKey={dataKey} />
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type='monotone'
            dataKey='recebido'
            stroke='#8884d8'
            fill='#8884d8' />
        </AreaChart>
      </div>
    )
  }
}

export default Chart
