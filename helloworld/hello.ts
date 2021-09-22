interface Persona {
    nome: string,
    anno: number
}

function saluto(persona: Persona) {
    return "-- Ciao, " + persona.nome + " del " + persona.anno + " ---";
}

document.body.textContent = saluto({ nome: "Ettore", anno: 1972 });