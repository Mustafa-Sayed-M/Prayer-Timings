const timingPrayerBaseUrl = process.env.REACT_APP_TIMINGS_PRAYER_API
const countriesBaseUrl = process.env.REACT_APP_COUNTRIES_API

// Fetch Timing Prayer:
export const fetchTimings = async (country, city) => {
    const url = `${timingPrayerBaseUrl}/timingsByCity/${'10-12-2024'}?country=${country}&city=${city}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Timing Prayer:
export const fetchCountries = async () => {
    const url = `${countriesBaseUrl}/all`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};