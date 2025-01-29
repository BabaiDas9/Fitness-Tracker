import { useCallback, useEffect, useMemo, useState } from "react";
import { LeftArrow, RightArrow } from "../../assets/Icon/allAppIcon";

export function CalenderCard() {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [days, setDays] = useState<number[]>([]);

    const weekDays: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    const monthHaveDays = useMemo(() => {
    return [
        { "January": 31 }, { "February": 28 }, { "March": 31 },
        { "April": 30 }, { "May": 31 }, { "June": 30 },
        { "July": 31 }, { "August": 31 }, { "September": 30 },
        { "October": 31 }, { "November": 30 }, { "December": 31 }
    ];
    }, []);


    const calculateDaysInMonth = useCallback(() => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const gap = firstDayOfMonth.getDay()-1; // 0 = Sunday, 1 = Monday, but i started from mon so i do -1 for adjust
        const currentMonthIndex = currentDate.getMonth();
        const prevMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
        const prevMonthDays = Object.values(monthHaveDays[prevMonthIndex])[0];
        const currentMonthDays = Object.values(monthHaveDays[currentMonthIndex])[0];
        
        const newDays: number[] = [];
        // Add days from previous month
        for (let i = 0; i < gap; i++) {
            newDays.push(prevMonthDays - gap + i + 1);
        }
        // Add current month days
        for (let i = 1; i <= currentMonthDays; i++) {
            newDays.push(i);
        }
        // Add next month days if needed to fill the grid
        const remainingDays = 42 - newDays.length;
        for (let i = 1; i <= remainingDays; i++) {
            newDays.push(i);
        }
        setDays(newDays);
    },[currentDate, monthHaveDays]);

    const toggleMonth = (direction: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
    }
    
    useEffect(() => {
        calculateDaysInMonth();
    }, [calculateDaysInMonth, currentDate]);

    return (
        <div className="card w-full rounded-md border bg-slate-50 shadow-md my-6 sm:my-0 sm:ms-3">

            {/* this section for Month name and toggle month  */}
            <section className="flex  flex-row justify-between ">
                <div className="flex flex-row">
                    <p className="text-center font-semibold  text-2xl sm:text-3xl lg:text-4xl">
                        {currentDate.toLocaleString('default', { month: 'long' }).toUpperCase() + " , " }
                    </p>
                    <p className="text-center  ms-2 text-2xl sm:text-3xl lg:text-4xl">
                        {currentDate.getFullYear()}
                    </p>
                </div>
                
                <div className="flex mt-2 cursor-pointer  ">
                    {new Date().getDate() !== currentDate.getDate() &&
                    <button className="text-gray-500 hover:text-gray-800"
                        onClick={() => setCurrentDate(new Date())}
                        >
                        Today
                    </button>}
                    <button onClick={() =>toggleMonth(-1) } ><LeftArrow /></button>
                    <button  onClick={() => toggleMonth(+1)} ><RightArrow /></button>
                </div>
            </section>
            {/* Days of the week */}
            <section className="grid grid-cols-7 mt-4">
                {weekDays.map((day) => (
                    <p key={day} className="text-center font-semibold p-2"> {day} </p>
                ))}
            </section>
            
            {/* Days grid */}
            <section className="grid grid-cols-7 grid-rows-6 ">
                {days.map((day, index) => (
                    <div key={index} className={`text-center p-2 
                        ${new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear() ? 'border rounded-2xl bg-green-400 ' : ''}
                    `}
                    >
                        <p> {day} </p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CalenderCard;