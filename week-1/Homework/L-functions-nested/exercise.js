const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

function hacerNombreMayuscula(mentor){
    const nombreMayuscula = mentor.toUpperCase()
    return nombreMayuscula
}

function saludoAGritos(mentor){
    return "HELLO" + " "+ hacerNombreMayuscula(mentor)
}


console.log((mentor1));
console.log(saludoAGritos(mentor1));
console.log(saludoAGritos(mentor2));
console.log(saludoAGritos(mentor3));
console.log(saludoAGritos(mentor4));
console.log(saludoAGritos(mentor5));

