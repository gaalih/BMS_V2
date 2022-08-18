import { Icon } from '@iconify/react';
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
  // value = 99;
  // const [fgFill, bgFill] = getBatteryFill(value);
  const capacity = value;
  const bcolor = getBatteryColor(capacity);

  // total_voltage
  // current
  return (
    <div className="card w-full ">
      <div className="card-body -mt-7">
        <h2 className="card-title mb-5 flex justify-center text-center text-xs font-bold tracking-wider text-slate-500">
          Battery Status
        </h2>
        <div className="-mt-3 flex justify-center">
          <div className="w-5/6 sm:w-4/6">
            <CircularProgressbarWithChildren
              value={capacity}
              circleRatio={0.75}
              background
              backgroundPadding={6}
              className="bg-default rounded-full shadow-xl shadow-slate-300"
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
                <Icon
                  icon="ic:round-bolt"
                  className="h-16 w-16"
                  style={{ color: bcolor }}
                />
              </div>
              <div className="mt-1 text-center ">
                <p className="text-bold -mb-1 block text-xl font-bold text-sky-800">
                  {capacity}
                  <span className="text-lg font-normal"> %</span>
                </p>
                <small className="text-xs">
                  {capacity === 100 ? (
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
