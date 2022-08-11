import { getBatteryColor } from 'lib/battery';
import { Props } from 'lib/utils';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface BatteryGaugeProps extends Props {
  value: number;
  // detail: number;
  // value: { [key: string]: number };
  // detail: { [key: string]: number };
  // variable: { [key: string]: string };
}

function BatteryGauge({ value }: BatteryGaugeProps) {
  // value = 25;
  // const [fgFill, bgFill] = getBatteryFill(value);
  const capacity = value;
  const bcolor = getBatteryColor(capacity);

  // total_voltage
  // current
  return (
    <div className="shadow-embross card w-full bg-transparent">
      <div className="card-body -mt-3">
        <h2 className="card-title mb-7 text-sm font-medium tracking-wide text-sky-900">
          Battery Status
        </h2>
        <div className="-mt-3 flex justify-center">
          <div className="w-5/6">
            <CircularProgressbarWithChildren
              value={capacity}
              circleRatio={0.75}
              background
              backgroundPadding={6}
              className="shadow-embross bg-default rounded-full"
              styles={buildStyles({
                backgroundColor: 'transparent',
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: 'round',
                pathColor: bcolor,
                trailColor: '#e4e4e7',
                textSize: '1em',
                pathTransitionDuration: 1,
              })}
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={bcolor}
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-1 text-center ">
                <p className="text-bold -mb-1 block text-xl font-bold text-sky-800">
                  {capacity}
                  <span className="text-lg font-normal"> %</span>
                </p>
                <small className="text-xs">
                  {capacity == 100 ? (
                    <span className="text-lime-500">Full Capacity</span>
                  ) : capacity <= 20 ? (
                    <span className="text-red-500">Low Capacity</span>
                  ) : (
                    ''
                  )}
                </small>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatteryGauge;
