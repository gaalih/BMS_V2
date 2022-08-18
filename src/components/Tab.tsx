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
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <div className="w-2/3 sm:w-1/2">
          <p className="text-sm font-bold leading-[1.1rem] tracking-wide text-slate-500 sm:text-xl sm:tracking-wider">
            Battery Management System
          </p>
        </div>

        <div className="hidden pl-10 sm:inline">
          <div className="tabs gap-4">
            <NavLink
              to="realtime"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'tab-active bg-gradient-to-tl from-slate-50 to-white text-cyan-500'
                    : ''
                } tab tab-lifted tab-lg text-sm font-bold tracking-wider hover:text-cyan-500`
              }
            >
              <Icon icon="fluent:live-24-filled" className="mr-1 h-5 w-5" />
              Realtime
            </NavLink>
            <NavLink
              to="historical"
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'tab-active bg-gradient-to-tl from-slate-50 to-white text-cyan-500'
                    : ''
                } tab tab-lifted tab-lg text-sm font-bold tracking-wider hover:text-cyan-500`
              }
            >
              <Icon icon="fontisto:history" className="mr-1 h-3 w-3" />
              Historical
            </NavLink>
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
