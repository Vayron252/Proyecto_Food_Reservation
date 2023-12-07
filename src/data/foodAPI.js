export const getNewProgramation = async () => {
    const response = await fetch('https://apitestprueba-4fg7.onrender.com/programaciones');
    const result = await response.json();
    return result;
}

export const getNewPublications = async (page) => {
    const response = await fetch(`https://apitestprueba-4fg7.onrender.com/publicaciones?_page=${page}&_limit=2`);
    const result = await response.json();
    return result;
}

export const getPublication = async (id) => {
    const response = await fetch(`https://apitestprueba-4fg7.onrender.com/publicaciones??id=${id}`);
    const result = await response.json();
    return result;
}