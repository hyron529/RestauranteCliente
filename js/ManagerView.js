
class ManagerView {
    /*
        Constructor donde vamos a iniciar la ubicación de las
        zonas donde vamos a trabajar
    */
    constructor() {

        this.inicio = document.getElementById("inicio");
        this.central = document.getElementById("central");
        this.menu = document.querySelector(".menu");

    }

    /*
        Manejador de eventos para cuando hacemos click 
        en inicio o en el logo
    */
    bindInit(handler) {
        document.getElementById("inicio").addEventListener("click", (event) => {
            handler();
        });

        document.getElementById("logo").addEventListener("click", (event) => {
            handler();
        });
    }

    /*
        Método que nos va a permitir visualizar las categorías del restaurante
        Primero se elimina la fila que contiene a las categorias, y definimos un div que las va a contener
        Le ponemos un título para un mejor diseño y ponemos las categorías
        Una vez hecho, colocamos el div en en html
    */
    showAllCategories(cat) {

        if (this.centralZone.children.length > 0)
            this.centralZone.children[0].remove();

        const catCont = document.createElement("div");

        catCont.classList.add("row");
        catCont.id = "dishes";
        catCont.insertAdjacentHTML(
            "beforeend",
            `
                <h3>Todas las categorías de nuestros productos<h3>
            `
        );

        for (const category of categories) {

            catCont.insertAdjacentHTML(

                "beforeend",
                `
                    <div class="card black rounded-3 mt-20" style="margin-right: 40px; margin-bottom: 40px width: 10%">
                        <a data-category="${category.category.name}" href="#dishes">
                            <div class="div-body text-center">
                                <p class="div-content">${category.category.name}
                                </p>
                            </div>
                        </a>
                    </div>
                `
            );
        }
        this.centralZone.append(catCont);
    }

    /*
        Método para desplegar las categoría en el nav de nuestra página
        Definimos la lista y el dropdown
        Ponemos el dorpdown en el enlace que las contendrá y definimos el ul
        Recorremos las categorías para poder mostrarlas en el desplegable en forma de lista
        y añadimos todos los elementos
    */
    showNavBarCategories(cat) {

        const item = document.createElement("li");

        item.classList.add("navBar-item", "dropdown");

        item.insertAdjacentHTML(
            "beforeend",
            `
                <a id="navBarCat" class="navBar-click dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
            `
        );

        const cats = document.createElement("ul");
        cats.classList.add("dropdown-menu", "bg-dark");

        for (const category of categories) {
            cats.insertAdjacentHTML(
                "beforeend",
                `
                <li>
                    <a class="dropdown-item rounded text-secondary data-category="${category.category.name}
                        href="#productlist" style="width: 80%;>
                        ${category.category.name}
                    </a>
                </li>
                `
            );
        }
        item.append(cats);
        this.menu.append(item);
    }

    /*
        Manejador de eventos que captura cuando hacemos click en una categoría
        Recogemos el elemento donde se hace el click y el enlace
        Recorremos los enlaces y recogemos el valor seleccionado
    */
    bindCategoryList(handler) {

        const categoryList = document.getElementById("dishes");
        const links = categoryList.querySelectorAll("a");

        for (const link of links) {
            link.addEventListener("click", (event) => {
                handler(event.currentTarget.dataset.category);
                console.log(event.currentTarget.dataset.category);
            });
        }
    }

    randomDishes(dish){

        if (this.initZone.children.length > 0) this.initZone.children[0].remove();

        const div = document.createElement("div");

        div.classList.add("row");
        div.id = "random-dish";

        div.insertAdjacentHTML(
            "beforeend",
            `
                <h1>Los mejores platos típicos</h1>
            `
        );

        for(const dish of dishes){
            div.insertAdjacentHTML(
                "beforeend",
                `
                    
                `
            );
        }
    }


}  