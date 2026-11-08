
function abrirFoto(imagen, mensaje) {

    document.getElementById("ventana").style.display = "flex";

    document.getElementById("fotoGrande").src = imagen;

    document.getElementById("textoFoto").textContent = mensaje;

}

function cerrarFoto() {

    document.getElementById("ventana").style.display = "none";

}

function mostrarSorpresa() {

    document.getElementById("mensajeSorpresa").style.display = "block";

}
