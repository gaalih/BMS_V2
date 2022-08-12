// import { Icon } from '@iconify/react';
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

<div className="grid grid-cols-4 gap-2 place-items-center text-slate-50 bg-gradient-to-tl from-sky-500 to-sky-200 rounded-box py-3">
  <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
  </div>
  <div className="">
          <p className="leading-4 text-center">
            <span className="text-xs block">Min</span>
            <span className='text-center font-bold text-sm'>{min.toFixed(2)}<small className="font-thin">{(variable.space ? ' ' : '') + decode(variable.unit)}</small></span>
          </p>
  </div>
  <div className="">
          <p className="leading-4 text-center">
            <span className="text-xs block">Average</span>
            <span className='text-center font-bold text-sm'>{average.toFixed(2)}<small className="font-thin">{(variable.space ? ' ' : '') + decode(variable.unit)}</small></span>
          </p>
  </div>
  <div className="">
          <p className="leading-4 text-center">
            <span className="text-xs block">Max</span>
            <span className='text-center font-bold text-sm'>{max.toFixed(2)}<small className="font-thin">{(variable.space ? ' ' : '') + decode(variable.unit)}</small></span>
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
