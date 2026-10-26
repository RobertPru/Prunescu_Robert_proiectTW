export default function TemaCard({ tema, onToggle, onDelete }) {
    return (
        <li className={tema.predat ? "item-card done" : "item-card"}>
            <label className="item-main">
                <input
                    type="checkbox"
                    checked={tema.predat}
                    onChange={() => onToggle(tema.id)}
                />
                <div>
                    <h3>{tema.titlu}</h3>
                    <span className={`badge badge-${tema.dificultate}`}>
                        {tema.dificultate}
                    </span>
                </div>
            </label>
            <button
                className="btn-danger"
                onClick={() => onDelete(tema.id)}
                aria-label={`Șterge ${tema.titlu}`}
            >
                Șterge
            </button>
        </li>
    );
}