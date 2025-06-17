import * as funcion from "../scripts/funciones.js";
import { indiceHtml, indiceCss, indiceJavaScript } from "./temas_titulos.js";

//tema
const param = new URLSearchParams(window.location.search);
const tema = param.get("tema")
//titulo h1 de la página 
const temaPrincipal = document.querySelector(".header__tema")
temaPrincipal.textContent = tema;
//DOM insertar apunte
const cuerpo = document.querySelector(".contenido");

//DOM insertar indice
const navegacion = document.querySelector(".indice__lista")

switch(tema){
    case "HTML":
        funcion.primeraCarga(funcion.normalizando(tema), funcion.normalizando(indiceHtml[0]), cuerpo);
        funcion.generarIndice(indiceHtml, navegacion, tema);
    break;
    case "CSS":
        funcion.primeraCarga(funcion.normalizando(tema), funcion.normalizando(indiceCss[0]), cuerpo);
        funcion.generarIndice(indiceCss, navegacion, tema);
    break;
    case "JavaScript":
        funcion.primeraCarga(funcion.normalizando(tema), funcion.normalizando(indiceJavaScript[0]), cuerpo);
        funcion.generarIndice(indiceJavaScript, navegacion, tema);
    break;
}

navegacion.addEventListener("click", e => {
    const temaIndex = funcion.normalizando(e.target.dataset.url);
    const url = `apuntes/${funcion.normalizando(tema)}/${temaIndex}.html`;
    console.log(url)
    fetch(url)
        .then(response => response.text())
        .then(html => cuerpo.innerHTML=html)
})
