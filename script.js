function calculate() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const ep = parseFloat(document.getElementById('ep').value);
    const ef = parseFloat(document.getElementById('ef').value);

    const promPractica = (nota1 + nota2 + nota3 + nota4) / 4;
    const promFinal = (promPractica + ep + ef) / 3;

    let result = `Practice Average: ${promPractica.toFixed(2)}<br>`;
    result += `Final Average: ${promFinal.toFixed(2)}<br>`;
    result += promFinal >= 12 ? "Status: Approved" : "Status: Not Approved";

    document.getElementById('result').innerHTML = result;
}
