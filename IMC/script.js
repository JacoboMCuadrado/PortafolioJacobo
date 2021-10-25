function calcularIMC() {
    let n1 = Number(document.getElementById("altura").value);
    let n2 = Number(document.getElementById("peso").value);
    let n3 = (n2/(n1**2)).toFixed(1);

    if(n3 < 18.5) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es demasiado bajo`;
    }else if(n3 >= 18.5 && n3 < 24.9) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es normal`;
    }else if(n3 >= 25 && n3 < 26.9) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es sobrepeso I`;
    }else if(n3 >= 27 && n3 < 29.9) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es sobrepeso II`;
    }else if(n3 >= 30 && n3 < 34.9) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es obesidad I`;
    }else if(n3 >= 35 && n3 < 39.9) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es obesidad II`;
    }else if(n3 >= 40 && n3 < 49.9) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es obesidad morbida`;
    }else if(n3 >= 50) {
        document.getElementById("res").innerText = `Su IMC es de ${n3} y es obesidad extrema`;
    }

    
}