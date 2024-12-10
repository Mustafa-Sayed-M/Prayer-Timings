import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTimings } from "./Utils/api";
import Header from "./Components/Header/Header";
import FilterCountry from "./Components/Filter/FilterCountry";
import Timings from "./Components/Timings/Timings";

function App() {

  // Timings Data:
  const [timingsData, setTimingsData] = React.useState([]);
  const [country, setCountry] = React.useState('EG');
  const [city, setCity] = React.useState('Cairo');

  // Timings Query:
  const timingsQuery = useQuery({
    queryKey: ["timings", country, city],
    queryFn: () => fetchTimings(country, city),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  React.useEffect(() => {
    if (timingsQuery.data) {
      const timingsObj = timingsQuery.data.data.timings;
      const timingsArr = Object.entries(timingsObj).map(([name, time]) => ({ name, time }));
      const finalArray = [
        timingsArr[0],
        timingsArr[1],
        timingsArr[2],
        timingsArr[3],
        timingsArr[4],
        timingsArr[5],
        timingsArr[6]
      ]

      setTimingsData(finalArray);
    }
  }, [timingsQuery.data]);

  return (
    <div className="App min-h-screen bg-slate-900 text-white">
      {/* Main Content */}
      <main>
        {/* Container */}
        <div className="container py-7">
          {/* App Wrapper */}
          <div className="app-wrapper mx-auto md:max-w-[700px] space-y-7">
            {/* Header */}
            <Header />
            {/* FilterCountry */}
            <FilterCountry setCity={setCity} setCountry={setCountry} />
            {/* Timings */}
            <Timings timingsData={timingsData} />
            {/* Hijri Date */}
            <p className="text-center text-sm opacity-80">{timingsQuery.data?.data.date.hijri.day} من {timingsQuery.data?.data.date.hijri.month.ar} - ( {timingsQuery.data?.data.date.hijri.year}  )</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
