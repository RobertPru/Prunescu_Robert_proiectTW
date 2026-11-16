import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTema } from "../api.js";
import { ETICHETE_DIFICULTATE } from "../constants.js";
import styles from "./TemaDetaliuPage.module.css";

export default function TemaDetaliuPage() {
    const { id } = useParams();
    const [tema, setTema] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        fetchTema(id)
            .then((data) => {
                if (!ignore) {
                    setTema(data);
                    setError(null);
                }
            })
            .catch((err) => {
                if (!ignore) setError(err.message);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, [id]);

    if (loading) {
        return (
            <p className="info" data-testid="loading">
                Se încarcă...
            </p>
        );
    }

    if (error) {
        return (
            <section className="panel">
                <p className="error" data-testid="error">
                    Tema nu a putut fi încărcată: {error}
                </p>
                <Link to="/">Înapoi la listă</Link>
            </section>
        );
    }

    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>
                Înapoi la listă
            </Link>
            <h2 className={tema.predat ? styles.done : undefined} data-testid="detail-title">
                {tema.titlu}
            </h2>
            <dl className={styles.fields}>
                <dt>Materie</dt>
                <dd>{tema.materie ?? "Nespecificată"}</dd>
                <dt>Dificultate</dt>
                <dd>
                    <span className={`badge badge-${tema.dificultate}`}>
                        {ETICHETE_DIFICULTATE[tema.dificultate] ?? tema.dificultate}
                    </span>
                </dd>
                <dt>Status</dt>
                <dd>{tema.predat ? "Predat" : "Nepredat"}</dd>
                <dt>ID</dt>
                <dd>{tema.id}</dd>
            </dl>
        </section>
    );
}