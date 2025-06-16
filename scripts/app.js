import * as funcion from "../scripts/funciones.js";
import { indiceHtml, indiceCss, indiceJavaScript } from "./temas_titulos.js";

//tema
const param = new URLSearchParams(window.location.search);
const tema = param.get("tema")
//titulo h1 de la página 
const tituloPrincipal = document.querySelector("header>h1");

//DOM insertar apunte
const cuerpo = document.querySelector("article");

//DOM insertar indice
const navegacion = document.querySelector("section > nav > ul")

switch(tema){
    case "HTML":
        funcion.primeraCarga(funcion.normalizando(tema), funcion.normalizando(indiceHtml[0]), cuerpo);
        tituloPrincipal.textContent = `Apuntes ${tema}`;
        funcion.generarIndice(indiceHtml, navegacion, tema);
    break;
    case "CSS":
        funcion.primeraCarga(funcion.normalizando(tema), funcion.normalizando(indiceCss[0]), cuerpo);
        tituloPrincipal.textContent = `Apuntes ${tema}`;
        funcion.generarIndice(indiceCss, navegacion, tema);
    break;
    case "JavaScript":
        funcion.primeraCarga(funcion.normalizando(tema), funcion.normalizando(indiceJavaScript[0]), cuerpo);
        tituloPrincipal.textContent = `Apuntes ${tema}`;
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

/*

*/

