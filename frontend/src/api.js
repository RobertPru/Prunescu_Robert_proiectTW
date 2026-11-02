export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchTeme() {
    const res = await fetch(`${API_URL}/teme`);
    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }
    return res.json();
}

export async function addTema(nouaTema) {
    const res = await fetch(`${API_URL}/teme`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nouaTema)
    });
    if (!res.ok) {
        throw new Error(`Eroare la adăugare: ${res.status}`);
    }
    return res.json();
}