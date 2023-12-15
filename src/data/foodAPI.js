export const getNewPublications = async (page) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/publicaciones?_page=${page}&_limit=2`);
    const result = await response.json();
    return result;
}

export const getPublication = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/publicaciones?id=${id}`);
    const result = await response.json();
    return result;
}

export const getLunch = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reservas`);
    const result = await response.json();
    return result;
}

export const getNewProgramation = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/programaciones`);
    const result = await response.json();
    return result;
}

export const getProgramationFood = async (fecha) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/programacion_almuerzo`);
    const result = await response.json();
    return result;
}

export const saveReserve = async (reserve) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reservas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fecha: reserve.date })
    })
    const result = await response.json();
    return result;
}