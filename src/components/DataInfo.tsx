import { Icon } from '@iconify/react';
import { Variable } from 'lib/battery';
import { decode } from 'html-entities';
import { Props } from 'lib/utils';
// import Card from './Card';
// import DataItem from './DataItem';

interface DataInfoProps extends Props {
  variable: Variable;
  min: number;
  average: number;
  max: number;
}

function DataInfo({ variable, min, average, max }: DataInfoProps) {
  console.log(variable);
  console.log(min);
  console.log(average);
  console.log(max);

  return (
    // <div className='flex justify-center'>

    <div className="rounded-box grid grid-cols-4 place-items-center gap-1 bg-gradient-to-tl from-slate-50 to-white py-4 text-slate-500 shadow-lg sm:py-2">
      <div
        className={`text-center leading-3`}
        style={{ color: variable.color }}
      >
        <Icon icon={variable.icon} className="h-12 w-12 sm:h-9 sm:w-9" />
        <small>{variable.label}</small>
      </div>
      <div className="">
        <p className="text-center leading-3">
          <span className="block text-xs">Min</span>
          <span className="text-center text-lg font-bold">
            {min.toFixed(2)}
            <small className="font-thin">
              {(variable.space ? ' ' : '') + decode(variable.unit)}
            </small>
          </span>
        </p>
      </div>
      <div className="">
        <p className="text-center leading-3">
          <span className="block text-xs">Average</span>
          <span className="text-center text-lg font-bold">
            {average.toFixed(2)}
            <small className="font-thin">
              {(variable.space ? ' ' : '') + decode(variable.unit)}
            </small>
          </span>
        </p>
      </div>
      <div className="">
        <p className="text-center leading-3">
          <span className="block text-xs">Max</span>
          <span className="text-center text-lg font-bold">
            {max.toFixed(2)}
            <small className="font-thin">
              {(variable.space ? ' ' : '') + decode(variable.unit)}
            </small>
          </span>
        </p>
      </div>
    </div>

    // </div>

    // <Card title={variable.label}>
    //   <Icon icon={variable.icon} className="h-16 w-16 text-teal-500" />
    //   <div className="mt-1 grid grid-cols-3 gap-4 sm:grid-cols-none sm:grid-rows-3">
    //     <DataItem label="Min" value={min} variable={variable} />
    //     <DataItem label="Average" value={average} variable={variable} />
    //     <DataItem label="Max" value={max} variable={variable} />
    //   </div>
    // </Card>
  );
}

export default DataInfo;
