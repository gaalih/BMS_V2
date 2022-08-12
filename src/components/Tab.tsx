import { TimestampContext } from 'App';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function Tab() {
  const { timestamp } = useContext(TimestampContext);
  return (
    <div>
      <div className="navigasi-mobile sm:hidden">
        <div className="btm-nav z-40 bg-white shadow-lg"></div>
        <div className="btm-nav z-50 h-28 bg-transparent shadow-md">
          <div>
          {/* <div className="-mr-2 pt-14"> */}
            {/* <p className="px-8 text-xs leading-3 text-slate-500">
              Battery Management System
            </p> */}
          </div>
          <div className="placeholder avatar z-10">
            <div className="focus text-grey-500 w-24 rounded-full bg-slate-100 pt-2 shadow-lg shadow-slate-300">
              <NavLink
                to="realtime"
                className={({ isActive }) =>
                  `${isActive ? 'text-cyan-500' : 'text-slate-500'}`
                }
              >
                <div className="flex flex-col justify-center">
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
      </div>
      {/* end navigasi mobile */}

      {/* navigasi desktop */}
      <div className="grid grid-cols-2 gap-2">
        <div className="">
            <div className="tabs tabs-boxed hidden gap-4 sm:inline">
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
            <div className='w-3/4'>
            <p className="text-sm leading-[1.1rem] font-bold text-slate-500 tracking-wide">Battery Management System</p>
            </div>
        </div>

        {/* end timestamp */}
        <div className="flex justify-end">
            {timestamp && (
              <div className="badge badge-info gap-2 badge-lg text-xs p-4 bg-default text-slate-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 inline-block stroke-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> {timestamp}
              </div>

              // <div className="h-50 w-auto bg-default shadow-xl shadow-slate-300 alert text-xs font-medium text-slate-600">
              //   <div>
              //     <svg
              //       xmlns="http://www.w3.org/2000/svg"
              //       fill="none"
              //       viewBox="0 0 24 24"
              //       className="h-5 w-5 flex-shrink-0 stroke-slate-600"
              //     >
              //       <path
              //         stroke-linecap="round"
              //         stroke-linejoin="round"
              //         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              //       />
              //     </svg>
              //     <span>{timestamp}</span>
              //   </div>
              // </div>

          )}
        </div>
        {/* end timestamp */}
      </div>
      {/* end Navigasi Desktop */}
    </div>
  );
}

export default Tab;
