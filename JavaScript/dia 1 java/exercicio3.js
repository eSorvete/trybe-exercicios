let statusCandidato = "reprovada";

switch (statusCandidato) {
    case "aprovada":
    console.log("parabens, aprovada")
    break;

    case "lista":
    console.log("você esta na lista de espera")
    break;

    case "reprovada":
    console.log("infelizmente, reprovada")
    break;

    default:
        console.log("informação incorreta")
}
