const API_URL = 'https://api.thedogapi.com/v1/';

export const getDogsList = async() => {
    try {
        const res = await fetch(`${API_URL}images/search?limit=100&page=10&order=Desc`);
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    } catch (error) {
        return {error: 'Unanable to retrive dogs data'};
    }
}

export const getBreedsList = async() => {
    try {
        const res = await fetch(`${API_URL}breeds`);
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    } catch (error) {
        return {error: 'Unanable to retrive breed data'};
    }
}

export const getBreedList = async (nameId: string) => {
    try {
        const res = await fetch(`${API_URL}images/search?breed_ids=${nameId}&limit=20`);
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    } catch (error) {
        return {error: 'Unanable to retrive breed data'};
    }
}