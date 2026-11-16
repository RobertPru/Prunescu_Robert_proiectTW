import { Link } from "react-router-dom";
import { ETICHETE_DIFICULTATE } from "../constants.js";
import styles from "./TemaCard.module.css";

export default function TemaCard({ tema, onToggle, onDelete }) {
    return (
        <li
            className={tema.predat ? `${styles.card} ${styles.done}` : styles.card}
            data-testid="item"
            data-id={tema.id}
        >
            <div className={styles.main}>
                <input
                    type="checkbox"
                    checked={tema.predat}
                    onChange={() => onToggle(tema.id)}
                    aria-label={`Marchează ${tema.titlu}`}
                    data-testid="item-toggle"
                />
                <div>
                    <Link
                        to={`/teme/${tema.id}`}
                        className={styles.title}
                        data-testid="item-link"
                    >
                        {tema.titlu}
                    </Link>
                    <span className={`badge badge-${tema.dificultate}`}>
                        {tema.materie ? `${tema.materie} · ` : ""}
                        {ETICHETE_DIFICULTATE[tema.dificultate] ?? tema.dificultate}
                    </span>
                </div>
            </div>
            <button
                className="btn-danger"
                onClick={() => onDelete(tema.id)}
                aria-label={`Șterge ${tema.titlu}`}
                data-testid="item-delete"
            >
                Șterge
            </button>
        </li>
    );
}