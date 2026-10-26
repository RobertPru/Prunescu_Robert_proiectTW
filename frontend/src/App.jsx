import { useState } from "react";
import TemeList from "./components/TemeList.jsx";

const TEME_INITIALE = [
    { id: 1, titlu: "Stage 1 Mockup", predat: false, dificultate: "medie", materie: "WebTech" },
    { id: 2, titlu: "SQL Queries lab", predat: true, dificultate: "ridicata", materie: "Databases" },
    { id: 3, titlu: "Math Homework 3", predat: false, dificultate: "scazuta", materie: "Math" }
];

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [teme, setTeme] = useState(TEME_INITIALE);
    const [tema, setTema] = useState(temaInitiala);

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
                    <h2>Temele mele</h2>
                    <TemeList
                        teme={teme}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </section>
            </main>
        </>
    );
}