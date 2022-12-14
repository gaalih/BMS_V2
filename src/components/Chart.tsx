import { eachMinuteOfInterval } from 'date-fns';
import { timestampFormatter } from 'lib/utils';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Label,
} from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';

interface ChartProps {
  data: { timestamp: string; value: number }[];
  label: string;
  unit: string;
  domain?: AxisDomain;
  tickCount?: number;
}

function Chart({ data, label, unit, domain, tickCount }: ChartProps) {
  const parsedData = data.map(d => {
    const [hours, min] = d.timestamp.split(':').map(Number);
    const timestamp = new Date().setHours(hours, min);
    return {
      ...d,
      timestamp,
    };
  });

  const timestamp = eachMinuteOfInterval({
    start: parsedData[0].timestamp,
    end: parsedData[parsedData.length - 1].timestamp,
  }).map(d => d.getTime());

  const tooltipFormatter = (value: number) => {
    const space = unit === '%' ? '' : ' ';
    return [`${value}${space}${unit}`, ''];
  };

  return (
    <ResponsiveContainer aspect={2}>
      <LineChart
        data={parsedData}
        margin={{ top: 5, right: 5, bottom: 16, left: 5 }}
        style={{ fontFamily: 'Albert Sans' }}
      >
        <CartesianGrid />
        <XAxis
          dataKey="timestamp"
          type="number"
          scale="time"
          domain={['auto', 'auto']}
          ticks={timestamp}
          tickFormatter={timestampFormatter}
          padding="no-gap"
          style={{ fontSize: '70%' }}
        >
          <Label
            value="Time"
            dy={24}
            style={{
              fontFamily: 'Albert Sans',
              fontSize: '70%',
              fill: '#294285',
              fontWeight: 'bold',
            }}
          />
        </XAxis>
        <YAxis
          domain={domain}
          tickCount={tickCount}
          interval="preserveStartEnd"
          padding={{ top: 4 }}
          style={{ fontSize: '70%' }}
        >
          <Label
            value={`${label} (${unit})`}
            angle={-90}
            dx={-16}
            style={{
              fontFamily: 'Albert Sans',
              fontSize: '70%',
              fill: '#294285',
              fontWeight: 'bold',
            }}
          />
        </YAxis>
        <Tooltip
          labelFormatter={timestampFormatter}
          formatter={tooltipFormatter}
          separator=""
          wrapperStyle={{ fontSize: '70%' }}
        />
        <Line dataKey="value" dot={false} strokeWidth={2} stroke="#0ea5e9" />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default Chart;
