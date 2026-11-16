export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: { "Content-Type": "application/json", ...options.headers },
    });
    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }
    return res.status === 204 ? null : res.json();
}

export function fetchTeme() {
    return request("/teme");
}

export function fetchTema(id) {
    return request(`/teme/${id}`);
}

export function createTema(tema) {
    return request("/teme", {
        method: "POST",
        body: JSON.stringify(tema),
    });
}

export function updateTema(id, changes) {
    return request(`/teme/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes),
    });
}

export function deleteTema(id) {
    return request(`/teme/${id}`, {
        method: "DELETE",
    });
}