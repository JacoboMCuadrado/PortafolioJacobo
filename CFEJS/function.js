function calcular_khw() {
    let khw = parseFloat(document.getElementById('num-khw').value);
    let tarifa1 = 0, tarifa2 = 0, tarifa3 = 0;

    if (khw > 600) {
        tarifa1 = (khw - 600) * 5;
        khw = 600;
    }
    if (khw > 300) {
        tarifa2 = (khw - 300) * 3;
        khw = 300;
    }
    tarifa3 = khw;

    let total = tarifa1 + tarifa2 + tarifa3;

    alert(`La tarifa de tu consumo es:\nT1     = $${tarifa3}\nT2     = $${tarifa2}\nT3     = $${tarifa1}\nTotal = $${total}`);
}