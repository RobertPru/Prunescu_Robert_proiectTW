const ETICHETE_DIFICULTATE = { scazuta: "scăzută", medie: "medie", ridicata: "ridicată" };

export default function TemaCard({ tema, onToggle, onDelete }) {
    return (
        <li
            className={tema.predat ? "item-card done" : "item-card"}
            data-testid="item"
            data-id={tema.id}
        >
            <label className="item-main">
                <input
                    type="checkbox"
                    checked={tema.predat}
                    onChange={() => onToggle(tema.id)}
                    data-testid="item-toggle"
                />
                <div>
                    <h3 data-testid="item-title">{tema.titlu}</h3>
                    <span className={`badge badge-${tema.dificultate}`}>
                        {tema.materie ? `${tema.materie} · ` : ""}
                        {ETICHETE_DIFICULTATE[tema.dificultate] ?? tema.dificultate}
                    </span>
                </div>
            </label>
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