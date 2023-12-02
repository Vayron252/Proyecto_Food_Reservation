export const getCurrentDate = () => {
    const fechaHoy = new Date();
    return fechaHoy;
}

export const getCurrentMonth = () => {
    const fechaHoy = getCurrentDate();
    return fechaHoy.getMonth() + 1;
}

export const getCurrentYear = () => {
    const fechaHoy = getCurrentDate();
    return fechaHoy.getFullYear();
}

export const getNameMonthShort = () => {
    const fechaHoy = getCurrentDate();
    return fechaHoy.toLocaleString('es-PE', { month: 'short' });
}

export const getNameMonthLong = (date) => {
    return date.toLocaleString('es-PE', { month: 'long' });
}

export const getFullDate = (year, month, day) => {
    const parts = (`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`).split('-');
    const mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate;
}

export const getLastDayOfMonth = (date) => {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDayOfMonth.getDate();
}