import { TimestampContext } from 'App';
import BatteryCell from 'components/BatteryCell';
import BatteryGauge from 'components/BatteryGauge';
// import Card from 'components/Card';
import DataInfo from 'components/DataInfo';
// import DataItem from 'components/DataItem';
import { decode } from 'html-entities';
import { Data, Variable } from 'lib/battery';
import { fetchRealtime } from 'lib/utils';
import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

function Realtime() {
  const { data } = useQuery<Data, Error>('realtime', fetchRealtime, {
    refetchInterval:
      Number(process.env.REACT_APP_REALTIME_FETCH_INTERVAL) * 1000,
  });
  const { setTimestamp } = useContext(TimestampContext);

  useEffect(() => {
    if (data) {
      setTimestamp(data.timestamp);
    }
  }, [data, setTimestamp]);

  return !data ? (
    <div className="mb-96 grid h-auto grid-cols-12 place-content-center gap-4 py-44 sm:mb-80">
      <div className="col-span-3 sm:col-span-5"></div>
      <div className="col-span-6 sm:col-span-2">
        <progress className="progress h-5 w-full"></progress>
        <p className="text-center">Loading...</p>
      </div>
      <div className="col-span-3 sm:col-span-5"></div>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {/* <Card title="Battery Status"> */}
      {/* kolom 1 */}
      <div>
        <BatteryGauge value={data.general[0].avg_soc} />
        <div className="mx-5 mt-5 sm:mt-0">
          <div className="-mt-5 flex w-full justify-center sm:mt-0">
            <div className="card rounded-box grid h-auto flex-grow place-items-center bg-gradient-to-tl from-sky-500 to-sky-200 py-3 text-slate-600 shadow-lg">
              <p className="text-center leading-4">
                <span className="block text-xs">Total Voltage</span>
                <span className="text-center text-xl font-bold">
                  {data.general[0].total_voltage.toFixed(2) +
                    (Variable.VOLTAGE.space ? ' ' : '')}
                  <small className="font-thin">
                    {decode(Variable.VOLTAGE.unit)}
                  </small>
                </span>
              </p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card rounded-box grid h-auto flex-grow place-items-center bg-gradient-to-tl from-emerald-500 to-emerald-200 py-3 text-slate-600 shadow-lg">
              <p className="text-center leading-4">
                <span className="block text-xs">Total Current</span>
                <span className="text-center text-xl font-bold">
                  {data.current.toFixed(2) +
                    (Variable.CURRENT.space ? ' ' : '')}
                  <small className="font-thin">
                    {decode(Variable.CURRENT.unit)}
                  </small>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* </Card> */}
        <div className="mt-5 grid grid-rows-3 gap-3 sm:grid-rows-none">
          <DataInfo
            variable={Variable.VOLTAGE}
            min={data.general[0].min_voltage}
            average={data.general[0].avg_voltage}
            max={data.general[0].max_voltage}
          />
          <DataInfo
            variable={Variable.TEMPERATURE}
            min={data.general[0].min_temperature}
            average={data.general[0].avg_temperature}
            max={data.general[0].max_temperature}
          />
          <DataInfo
            variable={Variable.SOC}
            min={data.general[0].min_soc}
            average={data.general[0].avg_soc}
            max={data.general[0].max_soc}
          />
        </div>
      </div>
      {/* end kolom 1 */}
      {/* kolom 2 */}
      <div className="col-span-2 sm:pl-10">
        <h2 className="card-title mt-7 mb-5 flex justify-center text-center text-xs font-bold tracking-wider text-slate-500 sm:mt-0">
          Cell Status
        </h2>
        <div className="card rounded-box mb-20 bg-gradient-to-tl from-slate-50 to-white py-4 shadow-lg">
          <div className="card-body -mt-5 -mb-5">
            <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-4 lg:grid-cols-5">
              {data.value.map((item, idx) => (
                <BatteryCell key={idx} value={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end kolom 2 */}
    </div>
  );
}

export default Realtime;
