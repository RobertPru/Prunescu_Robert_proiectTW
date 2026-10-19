export default function TemaCard({ tema }) {
    return (
        <li className={`item-card ${tema.predat ? "done" : ""}`}>
            <div>
                <h3>{tema.titlu}</h3>
                <span className={`badge badge-${tema.dificultate}`}>
                    {tema.dificultate}
                </span>
            </div>
            <span className="status">
                {tema.predat ? "Predat" : "Nepredat"}
            </span>
        </li>
    );
}