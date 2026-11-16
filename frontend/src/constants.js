export const DIFICULTATI = [
    { value: "scazuta", label: "Scăzută" },
    { value: "medie", label: "Medie" },
    { value: "ridicata", label: "Ridicată" },
];

export const ETICHETE_DIFICULTATE = Object.fromEntries(
    DIFICULTATI.map((d) => [d.value, d.label])
);