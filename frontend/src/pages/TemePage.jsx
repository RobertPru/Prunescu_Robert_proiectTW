import { useEffect, useState } from "react";
import TemeList from "../components/TemeList.jsx";
import TemaForm from "../components/TemaForm.jsx";
import { createTema, deleteTema, fetchTeme, updateTema } from "../api.js";
import styles from "./TemePage.module.css";

export default function TemePage() {
    const [teme, setTeme] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    async function handleAdd(nouaTema) {
        const creat = await createTema(nouaTema);
        setTeme((prev) => [...prev, creat]);
    }

    async function handleToggle(id) {
        const item = teme.find((t) => t.id === id);
        try {
            const actualizat = await updateTema(id, { predat: !item.predat });
            setTeme((prev) => prev.map((t) => (t.id === id ? actualizat : t)));
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await deleteTema(id);
            setTeme((prev) => prev.filter((t) => t.id !== id));
        } catch (err) {
            setError(err.message);
        }
    }

    const nepredate = teme.filter((t) => !t.predat).length;

    return (
        <div className={styles.grid}>
            <section className="panel">
                <h2>Adaugă temă</h2>
                <TemaForm onAdd={handleAdd} />
            </section>

            <section className="panel">
                <h2>Temele mele</h2>
                <p className={styles.summary}>
                    {teme.length} teme, dintre care {nepredate} nepredate
                </p>
                {loading && (
                    <p className="info" data-testid="loading">
                        Se încarcă...
                    </p>
                )}
                {error && (
                    <p className="error" data-testid="error">
                        {error}
                    </p>
                )}
                {!loading && (
                    <TemeList
                        teme={teme}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                )}
            </section>
        </div>
    );
}