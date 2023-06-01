/*  A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat" */

const textoDigitado = document.querySelector("#texto-digitado");

function criptografar() {
    let texto = textoDigitado.value;
    texto = texto.toLowerCase();
    let textoCriptografado = "";

    for (let index = 0; index < texto.length; index++) {
        let str = texto[index];
        if (str == "a") {
            str = "ai";
        } else if (str == "e") {
            str = "enter";
        } else if (str == "i") {
            str = "imes";
        } else if (str == "o") {
            str = "ober";
        } else if (str == "u") {
            str = "ufat";
        }
        textoCriptografado = textoCriptografado + str;
    }

    var x = document.querySelector("#imagem");
    if (x.style.display !== 'none' && textoCriptografado !== "") {
        x.style.display = 'none';
        document.querySelector("#texto-transformado").innerHTML = textoCriptografado;
    } else {
        document.querySelector("#texto-transformado").innerHTML = textoCriptografado;
    }
}

function descriptografar() {
    let texto = textoDigitado.value;
    texto = texto.toLowerCase();

    if (texto.includes("ai")) {
        texto = texto.replaceAll("ai", "a");
    }
    if (texto.includes("enter")) {
        texto = texto.replaceAll("enter", "e");
    }
    if (texto.includes("imes")) {
        texto = texto.replaceAll("imes", "i");
    }
    if (texto.includes("ober")) {
        texto = texto.replaceAll("ober", "o");
    }
    if (texto.includes("ufat")) {
        texto = texto.replaceAll("ufat", "u");
    }

    let textoDescriptografado = texto;
    
    var x = document.querySelector("#imagem");
    if (x.style.display !== 'none') {
        x.style.display = 'none';
        document.querySelector("#texto-transformado").innerHTML = textoDescriptografado;
    } else {
        document.querySelector("#texto-transformado").innerHTML = textoDescriptografado;
    }
}