let horario = 17 

let message = ""

if (horario >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
}

else if (horario >= 18 && horario > 22) {
    message = "Rango da noite, vamos jantar :D"
}

else if (horario >= 14 && horario < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
}

else if (horario >= 11 && horario < 14) {
    message = "hora do almoço"
}

else if (horario >= 4 && horario < 11) {
    message = "Hmmm, cheiro de café recém-passado"
}

console.log(message)