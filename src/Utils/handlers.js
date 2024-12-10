// Date and Time:
export const currentDate = () => new Date().toLocaleDateString('ar-EG', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});
export const currentTime = () => new Date().toLocaleTimeString('ar-EG', {
    weekday: 'long',
    hours: '2-digit',
    minutes: '2-digit',
    seconds: '2-digit'
});
export const formateTime = (time) => {
    const today = new Date().toISOString().split("T")[0];
    const dateTimeString = `${today}T${time}`;
    return new Date(dateTimeString).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
};