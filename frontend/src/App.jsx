const teme = [
    { id: 1, titlu: "Stage 1 Mockup", predat: false, dificultate: "medie", materie: "WebTech" },
    { id: 2, titlu: "SQL Queries lab", predat: true, dificultate: "ridicata", materie: "Databases" },
    { id: 3, titlu: "Math Homework 3", predat: false, dificultate: "scazuta", materie: "Math" }
];

export default function App() {
    const nepredate = teme.filter((t) => !t.predat).length;

    return (
        <>
            <header className="app-header">
                <h1>ELearn Tracker</h1>
                <p>Gestionează-ți temele pe materii și dificultate.</p>
                <p className="app-count">
                    {teme.length} teme, dintre care {nepredate} nepredate
                </p>
            </header>
            
            <main className="container">
                <section className="panel">
                    <h2>Temele mele</h2>
                    <pre>{JSON.stringify(teme, null, 2)}</pre>
                </section>
            </main>
        </>
    );
}