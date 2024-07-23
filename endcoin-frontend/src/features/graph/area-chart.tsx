import {
  AreaChart as AreaChartRecharts,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { selectGraphDataPoints } from '../program/program-slice';
import { useAppSelector } from '../../app/hooks';
import { useWindowSize } from '../../hooks/use-window-size';

export default function AreaChart() {
  const dataPoints = useAppSelector(selectGraphDataPoints);
  const windowSize = useWindowSize();
  const width = windowSize[0] > 1030 ? 1000 : windowSize[0] - 48;
  const height = windowSize[1] > 1030 ? 1000 : windowSize[1] - 48;

  return (
    <AreaChartRecharts
      width={width}
      height={height}
      data={dataPoints}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="blocktime" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="EndGaia" stroke="#8884d8" fill="#8884d8" />
    </AreaChartRecharts>
  );
}
