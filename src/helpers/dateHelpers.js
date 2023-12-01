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