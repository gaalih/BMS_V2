import Chart from 'components/Chart';
import { ModuleData } from 'lib/module';
import { fetchHistorical } from 'lib/utils';
import { useState } from 'react';
import { useQuery } from 'react-query';

const moduleList = Array.from({ length: 20 }, (_, k) => k + 1);

function Historical() {
  const [module, setModule] = useState(1);
  const { data } = useQuery<ModuleData, Error>(
    ['historical', module],
    () => fetchHistorical(module),
    {
      refetchInterval:
        Number(process.env.REACT_APP_HISTORICAL_FETCH_INTERVAL) * 1000,
    }
  );

  return (
    <div>
      <div className="form-control w-1/2 max-w-xs">
        <label className="label">
          <span className="label-text text-xs text-slate-600">
            Choose Modul
          </span>
        </label>
        <select
          className="select-bordered select bg-slate-50 text-xs text-slate-600"
          value={module}
          onChange={e => {
            setModule(Number(e.target.value));
          }}
        >
          {moduleList.map(m => (
            <option value={m} key={m}>
              Modul {m}
            </option>
          ))}
        </select>
      </div>

      {data && (
        <div className="grid grid-cols-1 gap-7 py-8 pb-32 sm:grid-cols-2">
          <div className="card rounded-box bg-gradient-to-tl from-slate-50 to-white p-5 pl-2 shadow-lg">
            <Chart
              data={data.chart_voltage}
              label="Voltage"
              unit="V"
              domain={[0, 5]}
              tickCount={6}
            />
          </div>
          <div className="card rounded-box bg-gradient-to-tl from-slate-50 to-white p-5 pl-2 shadow-lg">
            <Chart
              data={data.chart_temperature}
              label="Temperature"
              unit="&deg;C"
              domain={[0, 100]}
            />
          </div>
          <div className="card rounded-box bg-gradient-to-tl from-slate-50 to-white p-5 pl-2 shadow-lg">
            <Chart
              data={data.chart_soc}
              label="SoC"
              unit="%"
              domain={[0, 100]}
            />
          </div>
          <div className="card rounded-box bg-gradient-to-tl from-slate-50 to-white p-5 pl-2 shadow-lg">
            <Chart
              data={data.chart_current}
              label="Current"
              unit="A"
              domain={[0, 100]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Historical;
