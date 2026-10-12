const DIFICULTATI = ["scazuta", "medie", "ridicata"];

const teme = [
    { id: 1, titlu: "Stage 1 Mockup", predat: false, dificultate: "medie", materie: "WebTech" },
    { id: 2, titlu: "SQL Queries lab", predat: true, dificultate: "ridicata", materie: "Databases" },
    { id: 3, titlu: "Math Homework 3", predat: false, dificultate: "scazuta", materie: "Math" }
];

function listeazaTitluri(lista) {
    return lista.map((t) => t.titlu);
}

function numaraActive(lista) {
    return lista.filter((t) => !t.predat).length;
}

function cautaDupaTitlu(lista, text) {
    return lista.filter((t) => t.titlu.toLowerCase().includes(text.toLowerCase()));
}

function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaTema(lista, titlu, dificultate = "medie") {
    const titluCurat = titlu.trim();
    
    if (!titluCurat) {
        console.log("Eroare: Titlul nu poate fi gol.");
        return lista;
    }
    
    if (!DIFICULTATI.includes(dificultate)) {
        console.log("Eroare: Dificultate invalidă:", dificultate);
        return lista;
    }

    const temaNoua = {
        id: nextId(lista),
        titlu: titluCurat,
        predat: false,
        dificultate: dificultate,
        materie: "General"
    };
    
    return [...lista, temaNoua];
}

function comutaPredat(lista, id) {
    return lista.map((t) => 
        t.id === id ? { ...t, predat: !t.predat } : t
    );
}

function stergeTema(lista, id) {
    return lista.filter((t) => t.id !== id);
}

console.log("--- Citire inițială ---");
console.log("Temele mele:", teme);
console.log("Titluri:", listeazaTitluri(teme).join(", "));
console.log("Teme nepredate (active):", numaraActive(teme));
console.log("Căutare 'math':", listeazaTitluri(cautaDupaTitlu(teme, "math")).join(", "));

console.log("\n--- Adăugare ---");
let listaNoua = adaugaTema(teme, "Proiect Tehnologii Web", "ridicata");
console.log("Lista nouă:", listaNoua.length, "teme");
console.log("Originalul a rămas cu:", teme.length, "teme");

console.log("\n--- Modificare și ștergere ---");
listaNoua = comutaPredat(listaNoua, 1);
console.log("După bifarea temei cu id 1, active (nepredate):", numaraActive(listaNoua));
listaNoua = stergeTema(listaNoua, 3);
console.log("După ștergerea temei cu id 3, titluri:", listeazaTitluri(listaNoua).join(", "));

console.log("\n--- Validare ---");
adaugaTema(listaNoua, "   ");
adaugaTema(listaNoua, "Ceva", "urgenta");