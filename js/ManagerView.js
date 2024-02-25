
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
        document.getElementById("init").addEventListener("click", (event) => {
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

        if (this.central.children.length > 0) this.central.children[0].remove();

        const catCont = document.createElement("div");

        catCont.classList.add("row");
        catCont.id = "dishes";
        catCont.insertAdjacentHTML(
            "beforeend",
            `
                <h3 class="card_category_selector_text">Todas las categorías de nuestros productos<h3>
            `
        );
        

        for (const category of cat) {
        
            catCont.insertAdjacentHTML(

                "beforeend",
                `
                    <div class="card_categories_selector">
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
        this.central.append(catCont);
    }

    /*
        Método para desplegar las categoría en el nav de nuestra página
        Definimos la lista y el dropdown
        Ponemos el dropdown en el enlace que las contendrá y definimos el ul
        Recorremos las categorías para poder mostrarlas en el desplegable en forma de lista
        y añadimos todos los elementos
    */
    showCategoriesInNavBar(cat) {
        const cate = document.createElement("li");
        cate.classList.add("nav-item", "dropdown");

        cate.insertAdjacentHTML(
            "beforeend",
            `<a class="nav-link dropdown-toggle text-white" href="#" id="navBarCat" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>`
        );

        const catelist = document.createElement("ul");
        catelist.classList.add("dropdown-menu", "bg-dark");

        for (const category of cat) {
            catelist.insertAdjacentHTML(
                "beforeend",
                `<li>
                    <a data-category="${category.category.name}"
                        class="dropdown-item rounded text-secondary" 
                        style="width: 80%;"
                        href="#categorylist">${category.category.name}
                    </a>
                </li>`
            );
        }
        cate.append(catelist);
        this.menu.append(cate);
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
            });
        }
    }

      /*
        Manejador de eventos que recoge un click a un alérgeno del nav bar
        Recogemos el elemento y los enlaces de cada uno para después recorrerlos y
        recibir el valor de cada uno de ellos
    */
        bindCategoryListInNavBar(handler) {
            const navCat = document.getElementById("navBarCat");
            const links = navCat.nextSibling.querySelectorAll("a");
        
            for (const link of links) {
                link.addEventListener("click", (event) => {
                    handler(event.currentTarget.dataset.category);
                });
            }
        }
    

    /*
        Metodo empleado para visualizar los platos aleatoriamente en nuestra página
        Primero se eliminan las filas y se añaden id y clase
        Se pone un título y recorremos la lista de platos para mostrarlos de la forma deseada
        Se inserta el div con los platos
    */
    randomDishes(dishes) {

        if (this.inicio.children.length > 0) this.inicio.children[0].remove();

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
                <div class="card_random_dish">
                <a data-name="${dish.dish.name}" href="#single-dish">
                    <img src=${dish.dish.image} class="card_random_dish_img" alt="">
                   <div class="card_random_center">
                        <p class="card-text">${dish.dish.name}</p>
                   </div>
                </a>
            </div>
                `
            );
        }
        this.inicio.append(div);
    }

    /*
        Manejador de eventos que actúa cuando se hace click en un plato
        Primero se recoge el lugar donde vamos a guardar los platos
        Recogemos los enlaces dispoibles y se recorren todos
    */
    bindRandomDishes(handler) {
        const random = document.getElementById("random-dish");
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
        this.central.replaceChildren();
        const div = document.createElement("div");
        div.classList.add("row");
        div.id = "single-dish";

        div.insertAdjacentHTML("beforeend", `<h1>${name}</h1>`);
        for (const dish of dishes) {
            div.insertAdjacentHTML(
                "beforeend",
                `
                        <div class="card_list_dish">
                            <a data-name="${dish.dish.name}" href="#single-dish">
                                <img src=${dish.dish.image} class="card-img-top rounded-1" alt="">
                                <div class="card_list_dish_center">
                                        <p class="card-text">${dish.dish.name}</p>
                                </div>
                            </a>
                        </div>
                    `
            );
        }
        this.central.append(div);
    }

    /*
        Método con el que mostramos una tarjeta en concreto, su contenido está 
        formado por las características de cada plato cuando se pulsa
        Primero se borra la zona central, creamos el div con su id y clase
        Se mostrará la información en la web siempre y cuando haya un plato seleccionado
        una vez hecho, mostramos el div en la página
    */
        showDish(dish) {
            this.central.replaceChildren();
        
            const container = document.createElement("div");
            container.classList.add("card-container"); // Agregar clase para el contenedor principal
        
            const div = document.createElement("div");
            div.classList.add("card", "black");
            div.style.marginTop = "40px";
        
            if (dish) {
                div.id = "single-show-dish";
                div.insertAdjacentHTML(
                    "beforeend",
                    `
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src=${dish.image} alt="">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h2 class="card-title text-black">${dish.name}</h2>
                                        <p class="card-text text-secondary">${dish.description}</p>
                                        <h5 class="text-black">Ingredientes</h5>
                                        <p class="card-text text-ingredients">${dish.ingredients}</p>
                                        <button class="btn btn-primary text-uppercase m-2 px-4">Abrir en otra ventana</button>
                                    </div>
                                </div>
                            </div>
                        `
                );
            }
        
            container.append(div); // Agregar la tarjeta al contenedor principal
            this.central.append(container); // Agregar el contenedor principal al elemento central
        }
        

    /*
        Manejador de eventos que nos permite controlar los clicks a cada plato seleccionado
        Primero capturamos el elemento y el enlace
        Una vez hecho, los recorremos todos
    */
    bindShowDish(handler) {
        const dish = document.getElementById("single-dish");
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
    showAllergensInNavBar(allergens) {
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
    bindAllergenListInNavBar(handler) {
        const navBarAller = document.getElementById("navAller");
        const links = navBarAller.nextSibling.querySelectorAll("a");

        for (const link of links) {
            link.addEventListener("click", (event) => {
                handler(event.currentTarget.dataset.allergen);
            });
        }
    }

    /*
        Método para visualizar los menús disponibles en el nav bar de nuestra web
        Creamos el item y su correspondiente clase
        Hacemos que sea dropdown y definimos la lista donde guardamos los menús en el desplegable
        Le asignamos su clase y los recorremos para mostrarlos de la forma deseada
    */
    showMenuInNavBar(menus) {
        const elementMenu = document.createElement("li");
        elementMenu.classList.add("nav-item", "dropdown");

        elementMenu.insertAdjacentHTML(
            "beforeend",
            `<a class="nav-link dropdown-toggle text-white" href="#" id="navBarMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menus</a>`
        );

        const list = document.createElement("ul");
        list.classList.add("dropdown-menu", "bg-dark");

        for (const menu of menus) {
            list.insertAdjacentHTML(
                "beforeend",
                `<li><a data-menu="${menu.menu.name}" 
            class="dropdown-item rounded text-secondary" 
            style="width: 85%;"
            href="#allergenlist">${menu.menu.name}</a></li>`
            );
        }
        elementMenu.append(list);
        this.menu.append(elementMenu);
    }

    /*
        Manejador de eventos para controlar cuando se hace click en un menú de la nav bar
        Cogemos el elemento y los enlaces para poder recorrerlos
        y obtener el valor de cada uno de ellos
    */
    bindMenuListInNavBar(handler) {
        const navBarMenu = document.getElementById("navBarMenu");
        console.log(navBarMenu);
        const links = navBarMenu.nextSibling.querySelectorAll("a");

        for (const link of links) {
            link.addEventListener("click", (event) => {
                handler(event.currentTarget.dataset.menu);
            });
        }
    }

    /*
        Método que nos permite mostrar los restaurantes en el nav bar
        Creamos el item y su correspondiente clase
        Hacemos que sea dropdown y definimos la lista donde guardamos los restaurantes en el desplegable
        Le asignamos su clase y los recorremos para mostrarlos de la forma deseada
    */
    showRestaurantInNavBar(restaurants) {
        const itemRest = document.createElement("li");
        itemRest.classList.add("nav-item", "dropdown");

        itemRest.insertAdjacentHTML(
            "beforeend",
            `<a class="nav-link dropdown-toggle text-white" href="#" id="navBarRest" role="button" data-bs-toggle="dropdown" aria-expanded="false">Restaurantes</a>`
        );

        const list = document.createElement("ul");
        list.classList.add("dropdown-menu", "bg-dark");

        for (const restaurant of restaurants) {
            list.insertAdjacentHTML(
                "beforeend",
                `<li><a data-restaurant="${restaurant.restaurant.name}"
            class="dropdown-item rounded text-secondary" 
            style="width: 80%;"
            href="#allergenlist">${restaurant.restaurant.name}</a></li>`
            );
        }
        itemRest.append(list);
        this.menu.append(itemRest);
    }

    /*
        Manejador de eventos para controlar cuando se hace click en un restaurante de la nav bar
        Cogemos el elemento y los enlaces para poder recorrerlos
        y obtener el valor de cada uno de ellos
    */
    bindRestInNavBar(handler) {
        const navBarRest = document.getElementById("navBarRest");
        const links = navBarRest.nextSibling.querySelectorAll("a");

        for (const link of links) {
            link.addEventListener("click", (event) => {
                handler(event.currentTarget.dataset.restaurant);
            });
        }
    }

    /*
        Método empleado para mostrar la información de un restaurante seleccionado
        Primero eliminamos la zona central y definimos el div con su clase
        Se mostrará como tengamos establecido siempre y cuando el restaurante se obtiene correctamente del html
        Una vez hecho, mostramos la  información del restaurante en la web
    */
    showRest(restaurant) {
        this.central.replaceChildren();
        const div = document.createElement("div");
        div.classList.add("card", "black");
        div.style.marginTop = "40px";

        if (restaurant) {
            div.id = "restaurant";
            div.insertAdjacentHTML(
            "beforeend",
            `
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title text-white">${restaurant.name}</h2>
                        <p class="card-text text-secondary">${restaurant.description}</p>
                        <h5 class="text-white">Localización</h5>
                        <p class="card-text text-secondary">${restaurant.location}</p>
                    </div>
                </div>
            </div>
            `
          );
        }
        this.central.append(div);
    }
}  

export default ManagerView;