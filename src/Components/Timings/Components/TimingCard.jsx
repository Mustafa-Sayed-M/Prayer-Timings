import React from 'react';
import { formateTime } from '../../../Utils/handlers';

const translationMap = {
    Fajr: "الفجر",
    Sunrise: "الشروق",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Sunset: "الغروب",
    Maghrib: "المغرب",
    Isha: "العشاء",
};

function TimingCard({ timingData }) {

    const { name, time } = timingData;

    const dataOb = new Date();
    const currentDate = `${dataOb.getFullYear()}-${(dataOb.getMonth() + 1).toString().padStart(2, 0)}-${dataOb.getDate().toString().padStart(2, 0)}`
    const prayerTime = new Date(`${currentDate}T${time}:00`);

    return (
        <div className='timing-card bg-slate-800 rounded-md p-3 flex items-center justify-between'>
            {/* Info */}
            <div className='info flex items-center gap-2'>
                {/* Icon */}
                <img
                    src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}.png`}
                    alt={name}
                    width={25}
                    height={25}
                    className='object-cover'
                />
                {/* Name */}
                <p>{translationMap[name]}</p>
            </div>
            {/*  */}
            <div className='flex items-center gap-2'>
                {/* Time */}
                <p>{formateTime(`${time}`)}</p>
                {/* Status */}
                <p className={`${dataOb.getTime() > prayerTime.getTime() ? 'text-red-500' : 'text-green-500'}`}>{dataOb.getTime() > prayerTime.getTime() ? "الصلاة قد أنتهت" : "الصلاة التالية"}</p>
            </div>
        </div>
    )
}

export default TimingCard;