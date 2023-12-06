export const getNewProgramation = async () => {
    const response = await fetch('https://apitestprueba-4fg7.onrender.com/programaciones');
    const result = await response.json();
    return result;
}