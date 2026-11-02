import { useEffect, useState } from "react";
import TemeList from "./components/TemeList.jsx";
import TemaForm from "./components/TemaForm.jsx";
import { fetchTeme, addTema } from "./api.js";

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [teme, setTeme] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState(temaInitiala);

    useEffect(() => {
        let ignore = false;

        async function load() {
            try {
                const data = await fetchTeme();
                if (!ignore) setTeme(data);
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        load();
        return () => { ignore = true; };
    }, []);

    async function handleAddTema(nouaTema) {
        try {
            const temaSalvata = await addTema(nouaTema);
            setTeme((prev) => [...prev, temaSalvata]);
        } catch (err) {
            alert("Nu s-a putut adăuga tema: " + err.message);
        }
    }

    function handleToggle(id) {
        setTeme((prev) =>
            prev.map((t) => (t.id === id ? { ...t, predat: !t.predat } : t))
        );
    }

    function handleDelete(id) {
        setTeme((prev) => prev.filter((t) => t.id !== id));
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const nepredate = teme.filter((t) => !t.predat).length;

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <h1>ELearn Tracker</h1>
                <p>Gestionează-ți temele pe materii și dificultate.</p>
                <p className="app-count">
                    {teme.length} teme, dintre care {nepredate} nepredate
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <TemaForm onAdd={handleAddTema} />
                </section>

                <section className="panel">
                    <h2>Temele mele</h2>
                    {loading && <p className="info">Se încarcă lista...</p>}
                    {error && (
                        <p className="error">
                            Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
                        </p>
                    )}
                    {!loading && !error && (
                        <TemeList
                            teme={teme}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    )}
                </section>
            </main>
        </>
    );
}