var btnMenuOpen= document.getElementById("btn-menu-open");
var menuLateral= document.getElementById("menu-lateral");
var btnMenuClose= document.getElementById("btn-menu-close");
var btnNavToggle= document.getElementById("btn-nav-toggle");
var navLinks= document.getElementById("nav-links");

//Para agregar una función a un elemento del documento se utiliza el addEventListener
btnMenuOpen.addEventListener("click",mostrarMenuLateral);
btnMenuClose.addEventListener("click", ocultarMenuLateral);
btnNavToggle.addEventListener("click", toggleNaveLinks);
window.addEventListener("resize",arreglarNavLinks);

function mostrarMenuLateral(){
    //Agregamos una clase a un elemento
    menuLateral.classList.add("mostrar");
}


function ocultarMenuLateral(){
    //Quitamos la clase del elemento
    menuLateral.classList.remove("mostrar")
}

function toggleNaveLinks(){
    navLinks.classList.toggle("mostrar");

}

function arreglarNavLinks() {
    if(window.innerWidth >= 900){
        navLinks.classList.remove("mostrar");
    }
}
function cargarDatos(){
    var datos=[
        {url: "//instagram.com", nombre:"INSTAGRAM" , instruccion:"Instrucción Instagram"},
        {url: "//zara.com", nombre:"FACEBOOK" , instruccion:"Instrucción facebook"},
        {url: "assets/uploads/actividades/actividad-normal/index.html", nombre:"DETERMINAR LA OPERACIÓN" , instruccion:"Escoge la operación correcta"},
        {url: "assets/uploads/actividades/actividad-canvas/index.html", nombre:"ACTIVIDAD CANVAS" , instruccion:"Escoge la operación correcta"}
    ];
    return datos;
}

function generarLinks(){
    var menuLinks=document.getElementById("menu-links");
    menuLinks.innerHTML= "";
    var links= cargarDatos();
    if(links.length>0){
        //Cargaron los datos
        for (var i = 0; i < links.length; i++) {
            var texto=document.createTextNode(links[i].nombre);
            var link=document.createElement("a");
            //Le  vamos a poner un atributo
            link.href=links[i].url;
            link.target="main-iframe";
            link.appendChild(texto);
            var itemLista=document.createElement("li");
            itemLista.appendChild(link);
            menuLinks.appendChild(itemLista);
        }
    }
    else{
        //No llegaron los datows
        var texto=document.createTextNode("No se ha encontrado ninguna actividad");
        var itemLista=document.createElement("li");
        itemLista.appendChild(texto);
    }
}
generarLinks();