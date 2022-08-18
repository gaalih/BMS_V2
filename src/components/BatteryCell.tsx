import { Icon } from '@iconify/react';
import { decode } from 'html-entities';
import { getBatteryColor, Value, Variable } from 'lib/battery';
// import { classNames, Props } from 'lib/utils';
import { Props } from 'lib/utils';
import { useCallback } from 'react';
import BatteryGauge from 'react-battery-gauge';

interface BatteryCellValueProps extends Props {
  variable: Variable;
  value: Value;
}

function BatteryCellValue({ variable, value }: BatteryCellValueProps) {
  const getValue = useCallback(() => {
    switch (variable) {
      case Variable.VOLTAGE:
        return value.voltage;

      case Variable.TEMPERATURE:
        return value.temperature;

      case Variable.SOC:
        return value.soc;

      default:
        throw Error('Variable not recognized');
    }
  }, [variable, value]);

  return (
    <div className="flex items-center justify-start gap-3">
      <Icon
        icon={variable.icon}
        className="h-5 w-5 shrink-0"
        style={{ color: variable.color }}
      />
      <div className="leading-wider text-xs font-bold text-slate-500">
        {getValue().toFixed(2) + (variable.space ? ' ' : '')}
        <small className="font-medium">{decode(variable.unit)}</small>
      </div>
    </div>
  );
}

interface BatteryCellProps extends Props {
  value: Value;
}

function BatteryCell({ value }: BatteryCellProps) {
  // const [fgFill, bgFill] = getBatteryFill(value.soc);
  const bcolor = getBatteryColor(value.soc);

  return (
    <div>
      <div className="flex justify-center">
        <div className="indicator">
          <span className="badge text-2xs indicator-end indicator-bottom indicator-item rounded-full border-0 bg-sky-400 px-3 font-bold">
            {value.modul}
          </span>
          <BatteryGauge
            value={value.soc}
            customization={{
              batteryMeter: {
                fill: bcolor,
                outerGap: 0,
                lowBatteryValue: 25,
                lowBatteryFill: '#ef4444',
              },
              batteryBody: {
                fill: '#f1f5f9',
                strokeColor: '#cbd5e1',
                strokeWidth: 3,
                cornerRadius: 10,
              },
              batteryCap: {
                fill: '#cbd5e1',
                cornerRadius: 3,
                strokeWidth: 3,
                strokeColor: '#cbd5e1',
              },
              readingText: {
                lightContrastColor: '#4b5563',
                darkContrastColor: '#4b5563',
                lowBatteryColor: '#ef4444',
                fontFamily: 'Albert Sans',
                fontSize: 14,
                showPercentage: true,
              },
              chargingFlash: {
                animated: true,
                animationDuration: 2000,
              },
            }}
            size={110}
            animated={true}
            className="-mr-1"
          />
        </div>
      </div>
      <div className="mt-1 flex justify-center">
        <div>
          <BatteryCellValue variable={Variable.VOLTAGE} {...{ value }} />
          <BatteryCellValue variable={Variable.TEMPERATURE} {...{ value }} />
          <BatteryCellValue variable={Variable.SOC} {...{ value }} />
        </div>
      </div>
    </div>
    // <div aria-hidden className="mx-2 mt-2">
    //   {/* Background fill */}
    //   <div className={classNames(bgFill, 'relative h-10 w-20')}>
    //     {/* Foreground fill */}
    //     <div
    //       style={{ width: `${value.soc}%` }}
    //       className={classNames(fgFill, 'h-full')}
    //     />

    //     {/* Cell ID */}
    //     <div className="absolute -left-2 -top-2 grid h-5 w-5 cursor-default select-none place-items-center rounded-md bg-teal-600 text-xs leading-none text-white">
    //       {value.modul}
    //     </div>

    //     {/* Battery cap */}
    //     <div
    //       className={classNames(
    //         bgFill,
    //         'absolute inset-y-1/2 left-20 h-4 w-1 -translate-y-1/2 rounded-tr-md rounded-br-md'
    //       )}
    //     />
    //   </div>

    //   {/* Stats */}
    //   <div className="mt-2 space-y-1">
    //     <BatteryCellValue variable={Variable.VOLTAGE} {...{ value }} />
    //     <BatteryCellValue variable={Variable.TEMPERATURE} {...{ value }} />
    //     <BatteryCellValue variable={Variable.SOC} {...{ value }} />
    //   </div>
    // </div>
  );
}

export default BatteryCell;
