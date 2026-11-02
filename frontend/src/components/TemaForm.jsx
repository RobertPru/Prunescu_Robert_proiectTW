import { useState } from "react";

export default function TemaForm({ onAdd }) {
    const [titlu, setTitlu] = useState("");
    const [materie, setMaterie] = useState("");
    const [dificultate, setDificultate] = useState("medie");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!titlu.trim()) {
            setError("Titlul temei este obligatoriu!");
            return;
        }

        if (!materie.trim()) {
            setError("Materia este obligatorie!");
            return;
        }

        setError("");
        onAdd({
            titlu: titlu.trim(),
            materie: materie.trim(),
            dificultate,
            predat: false
        });

        setTitlu("");
        setMaterie("");
        setDificultate("medie");
    }

    return (
        <form className="form-panel" onSubmit={handleSubmit}>
            <h2>Adaugă temă</h2>
            {error && <p className="error-message">{error}</p>}

            <div className="form-group">
                <label htmlFor="titlu">Titlu temă</label>
                <input
                    id="titlu"
                    type="text"
                    placeholder="Ex: Laborator 7 React"
                    value={titlu}
                    onChange={(e) => setTitlu(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="materie">Materie</label>
                <input
                    id="materie"
                    type="text"
                    placeholder="Ex: WebTech"
                    value={materie}
                    onChange={(e) => setMaterie(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="dificultate">Dificultate</label>
                <select
                    id="dificultate"
                    value={dificultate}
                    onChange={(e) => setDificultate(e.target.value)}
                >
                    <option value="scazuta">Scăzută</option>
                    <option value="medie">Medie</option>
                    <option value="ridicata">Ridicată</option>
                </select>
            </div>

            <button type="submit" className="btn-primary">
                Adaugă
            </button>
        </form>
    );
}