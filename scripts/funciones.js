export function normalizando(texto) {
    return (texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"")).replaceAll(" ","_").replaceAll(",", "").toLowerCase();
}

// función para crear el indice, parámetros (array, referencia al elemento de navegación, indice del tema)
export function generarIndice(array, navegacion, tema){
    for(let i = 0 ; i < array.length ; i++){

        const linkIndice = document.createElement("a");
        linkIndice.href="#";
        linkIndice.textContent = array[i];
        linkIndice.dataset.url= array[i];
        linkIndice.setAttribute("class", "submenu__enlace")
        const listItemIndice = document.createElement("li");
        listItemIndice.setAttribute("class", "submenu__elemento")
        listItemIndice.appendChild(linkIndice);

        navegacion.appendChild(listItemIndice);
    }    
}

export function primeraCarga(temaPrimeraCarga, apuntePrimeraCarga, cuerpo){
const url = `apuntes/${temaPrimeraCarga}/${apuntePrimeraCarga}.html`;
fetch(url)
    .then(response => response.text())
    .then(html => cuerpo.innerHTML = html);
}