
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

    /*
        Metodo empleado para visualizar los platos aleatoriamente en nuestra página
        Primero se eliminan las filas y se añaden id y clase
        Se pone un título y recorremos la lista de platos para mostrarlos de la forma deseada
        Se inserta el div con los platos
    */
    randomDishes(dish) {

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

        for (const dish of dishes) {
            div.insertAdjacentHTML(
                "beforeend",
                `
                <div class="card black rounded-3 mr-10" style="width: 18rem; margin-right: 30px; margin-bottom: 30px;">
                <a data-name="${dish.name}" href="#single-dish">
                    <img style="width: 18rem; height: 14rem;" src=${dish.image} class="card-img-top rounded-1" alt="">
                   <div class="card-body text-center">
                        <p class="card-text">${dish.name}</p>
                   </div>
                </a>
            </div>
                `
            );
        }
        this.initZone.append(div);
    }

    /*
        Manejador de eventos que actúa cuando se hace click en un plato
        Primero se recoge el lugar donde vamos a guardar los platos
        Recogemos los enlaces dispoibles y se recorren todos
    */
    bindRandomDishes(handler) {
        const random = document.getElementById("random-dishes");
        const links = random.querySelectorAll("a");
        for (const link of links) {
            link.addEventListener("click", (event) => {
                handler(event.currentTarget.dataset.name);
            });
        }
    }

    /*
        Método que nos va a permitir listar todos nuestros platos
        Hay que eliminar la zona central y se crea el div con su clase e id
        Se recorren todos los platos y mostramos el div
    */
    listDishes(dishes, name) {
        this.centralZone.replaceChildren();
        const div = document.createElement("div");
        div.classList.add("row");
        div.id = "dish-list";

        div.insertAdjacentHTML("beforeend", `<h1>${name}</h1>`);
        for (const dish of dishes) {
            div.insertAdjacentHTML(
                "beforeend",
                `
                        <div class="card black rounded-3 mr-10" style="width: 18rem; margin-right: 30px; margin-bottom: 30px;">
                            <a data-name="${dish.name}" href="#single-dish">
                                <img style="width: 18rem; height: 14rem;" src=${dish.image} class="card-img-top rounded-1" alt="">
                                <div class="card-body text-center">
                                        <p class="card-text">${dish.name}</p>
                                </div>
                            </a>
                        </div>
                    `
            );
        }
        this.centralZone.append(div);
    }

    /*
        Método con el que mostramos una tarjeta en concreto, su contenido está 
        formado por las características de cada plato cuando se pulsa
        Primero se borra la zona central, creamos el div con su id y clase
        Se mostrará la información en la web siempre y cuando haya un plato seleccionado
        una vez hecho, mostramos el div en la página
    */
    showDish(dish) {
        this.centralZone.replaceChildren();

        const div = document.createElement("div");
        div.classList.add("card", "black");
        div.style.marginTop = "40px";

        if (dish) {
            div.id = "single-dish";
            div.insertAdjacentHTML(
                "beforeend",
                `
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src=${dish.image} style="height:auto;" class="img-fluid rounded-start" alt="">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title text-white">${dish.name}</h2>
                                    <p class="card-text text-secondary">${dish.description}</p>
                                    <h5 class="text-white">Ingredientes</h5>
                                    <p class="card-text text-secondary">${dish.ingredientsString}</p>
                                </div>
                            </div>
                        </div>
    
                    `
            );
        }
        this.centralZone.append(div);
    }

    /*
        Manejador de eventos que nos permite controlar los clicks a cada plato seleccionado
        Primero capturamos el elemento y el enlace
        Una vez hecho, los recorremos todos
    */
    bindShowDish(handler) {
        const dish = document.getElementById("dishes");
        const links = dish.querySelectorAll("a");
        for (const link of links) {
            link.addEventListener("click", (event) => {
                handler(event.currentTarget.dataset.name);
            });
        }
    }

    /*
        Método para mostrar en el nav bar los alérgenos de los platos
        Creamos la lista con su clase, le ponemos el enlace para que sea dropdown
        y definimos la lista del desplegable donde se alojarán los alérgenos, se le 
        pone su clase y recorremos dichos alergenos para poder mostrarlos en el html de 
        la forma deseada
    */
    showAllergensInNav(allergens) {
        const aller = document.createElement("li");
        aller.classList.add("nav-item", "dropdown");

        aller.insertAdjacentHTML(
            "beforeend",
            `<a class="nav-link dropdown-toggle text-white" href="#" id="navAller" role="button" data-bs-toggle="dropdown" aria-expanded="false">Alergenos</a>`
        );

        const allerList = document.createElement("ul");
        allerList.classList.add("dropdown-menu", "bg-dark");

        for (const allergen of allergens) {
            allerList.insertAdjacentHTML(
                "beforeend",
                `<li>
                    <a data-allergen="${allergen.allergen.name}"
                        class="dropdown-item rounded text-secondary" 
                        style="width: 80%;"
                        href="#allergenlist">${allergen.allergen.name}
                    </a>
                </li>`
            );
        }
        aller.append(allerList);
        this.menu.append(aller);
    }

    /*
        Manejador de eventos que recoge un click a un alérgeno del nav bar
        Recogemos el elemento y los enlaces de cada uno para después recorrerlos y
        recibir el valor de cada uno de ellos
    */
    bindDishAllergenListInNav(handler) {
        const navBarAller = document.getElementById("navAller");
        const links = navBarAller.nextSibling.querySelectorAll("a");

        for (const link of links) {
            link.addEventListener("click", (event) => {
                handler(event.currentTarget.dataset.allergen);
            });
        }
    }

}  