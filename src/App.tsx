import '@fontsource/inter/variable.css';
import Tab from 'components/Tab';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const TimestampContext = createContext<any>(null);

function App() {
  const [timestamp, setTimestamp] = useState<string | null>(null);
  return (
    <TimestampContext.Provider value={{ timestamp, setTimestamp }}>
      <div className="min-h-screen">
        <header className="hidden sm:inline">
          {/* <h1 className="mb-4 p-4 text-center text-2xl font-extrabold tracking-wider">
            Battery Management System
          </h1> */}
        </header>
        <main className="mx-auto w-full space-y-4 px-4 pt-5">
          <Tab />
          <Outlet />
        </main>
      </div>
    </TimestampContext.Provider>
  );
}

export default App;
