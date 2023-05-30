function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    //El img que aparece despues de las barras inclinadas es para darle instrucciones a cada una de las letras:
    //Letra i = es para que tome letras mayusculas y minusculas
    //Letra g = tome en cuenta toda la linea u oracion
    //Letra m = tome en cuenta multiples lineas
    //La primera letra va a ser intercambiada por lo que esta entre llaves
    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("textodesencriptado").innerHTML = textoEncriptado; //El inner es para que me traiga los valores que se
                                                                                //solicitaron para cada vocal.
}

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    //El img que aparece despues de las barras inclinadas es para darle instrucciones a cada una de las letras:
    //Letra i = es para que tome letras mayusculas y minusculas
    //Letra g = tome en cuenta toda la linea u oracion
    //Letra m = tome en cuenta multiples lineas
    //La primera letra va a ser intercambiada por lo que esta entre llaves
    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("textodesencriptado").innerHTML = textoEncriptado; //El inner es para que me traiga los valores que se
                                                                                //solicitaron para cada vocal.
}

function copiar(){
    var contenido = document.querySelector("#textodesencriptado");
    contenido.select();
   document.execCommand("copy");
}