import React from 'react';
import { currentDate, currentTime } from '../../Utils/handlers';

function Header() {

    const [time, setTime] = React.useState(currentTime())

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(currentTime());
        }, 0);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header flex items-center justify-between">
            {/* Title */}
            <h1 className="font-medium text-lg">
                <span>مواقيت الصلاة </span>
                <span className="text-sm opacity-90 max-sm:hidden">( {currentDate()} )</span>
            </h1>
            {/* Date and Time Container */}
            <div className="date-time-container">
                {/* Time */}
                <h2 className="text-xl font-medium">{time}</h2>
            </div>
        </header>
    )
}

export default Header;