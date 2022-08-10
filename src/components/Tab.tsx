import { TimestampContext } from 'App';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function Tab() {
  const { timestamp } = useContext(TimestampContext);
  return (
    <div className="">
      <div className="tabs tabs-boxed gap-4">
        <NavLink
          to="realtime"
          className={({ isActive }) => `${isActive ? 'tab-active' : ''} tab`}
        >
          Realtime
        </NavLink>
        <NavLink
          to="historical"
          className={({ isActive }) => `${isActive ? 'tab-active' : ''} tab`}
        >
          Historical
        </NavLink>
      </div>
      <div className="navigasi-mobile sm:hidden">
        <div className="btm-nav z-40 bg-white"></div>
        <div className="btm-nav z-50 h-28 bg-transparent shadow-md">
          <div></div>
          <div className="placeholder avatar z-10 ">
            <div className="focus text-grey-500 w-24 rounded-full bg-slate-100 pt-2 shadow-lg">
              <NavLink
                to="realtime"
                className={({ isActive }) =>
                  `${isActive ? 'text-cyan-500' : 'text-slate-500'}`
                }
              >
                <div className="-mb-2 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-2xs btm-nav-label">realtime</span>
              </NavLink>
            </div>
          </div>
          <NavLink
            to="historical"
            className={({ isActive }) =>
              `${isActive ? 'text-cyan-500' : 'text-slate-500'} pt-14`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-mb-1 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="btm-nav-label text-xs">Historical</span>
          </NavLink>
        </div>
      </div>{' '}
      {/* end navigasi mobile */}
      {timestamp && (
        <div className="ml-auto rounded-md bg-teal-100 px-4 py-2 font-medium shadow">
          {timestamp}
        </div>
      )}
    </div>
  );
}

export default Tab;
