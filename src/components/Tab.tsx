import { TimestampContext } from 'App';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Tab() {
  const { timestamp } = useContext(TimestampContext);
  return (
    <div>
      <div className="navigasi-mobile sm:hidden">
        <div className="btm-nav z-40 bg-white shadow-lg"></div>
        <div className="btm-nav z-50 h-28 bg-transparent shadow-md">
          <div></div>
          <div className="placeholder avatar z-10">
            <div className="focus text-grey-500 w-24 rounded-full bg-slate-100 pt-2 shadow-lg shadow-slate-300">
              <NavLink
                to="realtime"
                className={({ isActive }) =>
                  `${isActive ? 'text-cyan-500' : 'text-slate-500'}`
                }
              >
                <div className="flex flex-col justify-center">
                  <Icon icon="fluent:live-24-filled" className="h-12 w-12" />
                  <span className="text-2xs btm-nav-label -mt-1 text-center">
                    realtime
                  </span>
                </div>
              </NavLink>
            </div>
          </div>
          <NavLink
            to="historical"
            className={({ isActive }) =>
              `${isActive ? 'text-cyan-500' : 'text-slate-500'} pt-14`
            }
          >
            <Icon icon="fontisto:history" className="h-5 w-5" />
            <span className="btm-nav-label text-xs">Historical</span>
          </NavLink>
        </div>
      </div>
      {/* end navigasi mobile */}

      {/* navigasi desktop */}
      <div className="grid grid-cols-2 gap-2">
        <div className="">
          <div className="tabs tabs-boxed hidden gap-4 sm:inline">
            <NavLink
              to="realtime"
              className={({ isActive }) =>
                `${isActive ? 'tab-active' : ''} tab`
              }
            >
              Realtime
            </NavLink>
            <NavLink
              to="historical"
              className={({ isActive }) =>
                `${isActive ? 'tab-active' : ''} tab`
              }
            >
              Historical
            </NavLink>
          </div>
          <div className="w-3/4">
            <p className="text-sm font-bold leading-[1.1rem] tracking-wide text-slate-500">
              Battery Management System
            </p>
          </div>
        </div>

        {/* end timestamp */}
        <div className="flex justify-end">
          {timestamp && (
            <div className="bg-default badge badge-lg badge-info gap-2 p-4 text-xs text-slate-500 shadow-md">
              <Icon icon="clarity:history-line" className="h-5 w-5 font-bold" />
              {timestamp}
            </div>
          )}
        </div>
        {/* end timestamp */}
      </div>
      {/* end Navigasi Desktop */}
    </div>
  );
}

export default Tab;
