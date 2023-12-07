export const getNewProgramation = async () => {
    const response = await fetch('https://apitestprueba-4fg7.onrender.com/programaciones');
    const result = await response.json();
    return result;
}

export const getNewPublications = async () => {
    const response = await fetch('http://localhost:3000/publicaciones');
    const result = await response.json();
    return result;
}