export const fetchWrapper = async (url: string, options: any) => {
    const response = await fetch(`http://localhost:3000${url}`, options);
    const data = await response.json();
    return data;
};