function calcular_des() {
    let dataset_prompt = document.getElementById('num-khw').value;
    let dataset = dataset_prompt.split(',').map(Number);

    let n = dataset.length;
    let total = 0;

    dataset.forEach(function (element) {
        total += element;
    });

    let media = total / n;

    let sum = 0;

    dataset.forEach(function (element) {
        sum += Math.pow(element - media, 2);
    });

    let varianza = sum / n;

    alert(`Desviacion estandar:\n${Math.sqrt(varianza)}`);
}