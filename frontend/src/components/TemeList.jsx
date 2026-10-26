import TemaCard from "./TemaCard.jsx";

export default function TemeList({ teme, onToggle, onDelete }) {
    if (teme.length === 0) {
        return <p className="empty">Nu există nicio temă.</p>;
    }

    return (
        <ul className="item-list">
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