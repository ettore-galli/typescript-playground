function saluto(persona) {
    return "-- Ciao, " + persona.nome + " del " + persona.anno + " ---";
}
document.body.textContent = saluto({ nominativo: "Etore", anno: 1972 });
