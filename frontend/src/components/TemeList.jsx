import TemaCard from "./TemaCard.jsx";
import styles from "./TemeList.module.css";

export default function TemeList({ teme, onToggle, onDelete }) {
    if (teme.length === 0) {
        return (
            <p className="empty" data-testid="empty">
                Nu există nicio temă.
            </p>
        );
    }

    return (
        <ul className={styles.list}>
            {teme.map((tema) => (
                <TemaCard
                    key={tema.id}
                    tema={tema}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}