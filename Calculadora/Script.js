function calc(operation) {
    document.getElementById("sum").hidden = true;
    document.getElementById("res").hidden = true;
    document.getElementById("mul").hidden = true;
    document.getElementById("div").hidden = true;
    document.getElementById("pro").hidden = true;
    document.getElementById("std").hidden = true;
    document.getElementById(operation).hidden = false;
}

function suma() {
    let n1 = Number(document.getElementById("sumn1").value);
    let n2 = Number(document.getElementById("sumn2").value);
    document.getElementById("ressum").innerText = `Resultado = ${n1+n2}`;
}

function resta() {
    let n1 = Number(document.getElementById("resn1").value);
    let n2 = Number(document.getElementById("resn2").value);
    document.getElementById("resres").innerText = `Resultado = ${n1-n2}`;
}

function multiplicacion() {
    let n1 = Number(document.getElementById("muln1").value);
    let n2 = Number(document.getElementById("muln2").value);
    document.getElementById("resmul").innerText = `Resultado = ${n1*n2}`;
}

function division() {
    let n1 = Number(document.getElementById("din1").value);
    let n2 = Number(document.getElementById("din2").value);
    if (n2 == 0){
        alert("Accion imposible, Razon: No se puede dividir por 0.Si usted dividio por cero por favor reportar cualquier desgarre en la realidad cerca de usted.");
    }
    document.getElementById("resdiv").innerText = `Resultado = ${n1/n2}`;
}

function generar_promedio() {
    let lim = Number(document.getElementById("pron2").value);
    for (let index = 0; index < lim; index++) {
        let el = document.createElement("input");
        let salto = document.createElement("br");
        let salto2 = document.createElement("br");
        el.type = "number";
        el.id = `pro-${index}`;
        document.getElementById("pro").appendChild(el);
        document.getElementById("pro").appendChild(salto);
        document.getElementById("pro").appendChild(salto2);
    }
    let btn = document.createElement("button");
    btn.setAttribute("onclick","promedio();");
    btn.innerText = "CALCULAR";
    document.getElementById("pro").appendChild(btn);
}

function promedio() {
    let n = Number(document.getElementById("pron2").value);
    let cont = 0;
    for (let index = 0; index < n; index++) {
        cont += Number(document.getElementById(`pro-${index}`).value);
    }
    document.getElementById("pro-res").innerText = `Resultado = ${cont/n}`;
}

function generar_desviacion() {
    let lim = Number(document.getElementById("std-n2").value);
    for (let index = 0; index < lim; index++) {
        let el = document.createElement("input");
        let salto = document.createElement("br");
        let salto2 = document.createElement("br");
        el.type = "number";
        el.id = `std-${index}`;
        document.getElementById("std").appendChild(el);
        document.getElementById("std").appendChild(salto);
        document.getElementById("std").appendChild(salto2);
    }
    let btn = document.createElement("button");
    btn.setAttribute("onclick","desviacion();");
    btn.innerText = "CALCULAR";
    document.getElementById("std").appendChild(btn);
}

function desviacion() {
    let n = Number(document.getElementById("std-n2").value);
    let dataset = []
    let cont = 0;
    for (let index = 0; index < n; index++) {
        cont += Number(document.getElementById(`std-${index}`).value);
        dataset.push(Number(document.getElementById(`std-${index}`).value));
    }

    let media = cont/n;

    let sum = 0;

    dataset.forEach(function(element){
        sum += Math.pow(element-media, 2);
    });

    let varianza = sum/n;

    document.getElementById("std-res").innerText = `Resultado = ${Math.sqrt(varianza)}`;
}