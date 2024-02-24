import {ObjectFalseException, ObjectTrueException, EmptyElementException, ErrorTypeExecption, IncorrectValueException } from "./Exception.js";
import { Dish } from "./objects/Dish.js";
import { Allergen } from "./objects/Allergen.js";
import { Category } from "./objects/Category.js";
import { Menu } from "./objects/Menu.js";
import { Restaurant } from "./objects/Restaurant.js";


/*
    Clase manager
*/

/*
    En primer lugar, vamos a crear en patrón Singleton y su instancia,
    ya que nos va a permitir crear todos los métodos que necesitamos para
    dar funcionalidad al restaurante.
    También necesitamos una clase para contener en mapas los elementos de las
    clases que heredamos
*/
const Manager = (function () {
    let instance;

    class Manager {

        #name;
        #mapDish = new Map();
        #mapAllergen = new Map();
        #mapCategory = new Map();
        #mapMenu = new Map();
        #mapRestaurant = new Map();

        /* 
            Constructor de la clase manager, donde vamos a comprobar si el nombre
            introducido es nulo o no
        */
        constructor(name = "Restaurant Manager") {
            if ((name === null)) throw new EmptyElementException("name");
            this.#name = name;
        }

        /*
            Realización de getters de las clases hija
        */
        get categories() {
            const array = this.#mapCategory.values();
            return {
                *[Symbol.iterator]() {
                    for (const d of array) {
                        yield d;
                    }
                }
            }
        }

        get menus() {
            const array = this.#mapMenu.values();
            return {
                *[Symbol.iterator]() {
                    for (const d of array) {
                        yield d;
                    }
                }
            }
        }

        get allergens() {
            const allergens = this.#mapAllergen.values();
            return {
                *[Symbol.iterator]() {
                    for (const allergen of allergens) {
                        yield allergen;
                    }
                }
            }
        }

        get restaurants() {
            const array = this.#mapRestaurant.values();
            return {
                *[Symbol.iterator]() {
                    for (const d of array) {
                        yield d;
                    }
                }
            }
        }

        #getValuesMenuCollection(menu) {
            return this.#mapMenu.get(menu.name);
        }

        /*
            Método para añadir una nueva categoría
            Lanzamos excepción siempre que dicha categoría sea nula, si no es un
            objeto de esta clase o si ya se encuentra almacenado
            En caso contrario, procedemos a añadir el objeto
            Finalmente, tenemos que devolver this para poder encadenar
        */
        addCategory(...categories) {
            for (const category of categories) {
                if (category === null) throw new IncorrectValueException("category");
                if (!(category instanceof Category)) throw new ErrorTypeExecption("category", "Category");
                if (this.#mapCategory.has(category.name)) throw new ObjectTrueException("category");
                this.#mapCategory.set(category.name, {
                    category,
                    dishes: []
                });
                console.log("<<<<<Categoría añadida>>>>>");
            }
            return this;
        }

        /*
            Método con el que eliminamos una categoría
            Lanzamos excepción en caso de ser un objeto distinto o no encontrarse 
            almacenada. En caso contrario, eliminamos del mapa la categoría deseada
            Finalmente, tenemos que devolver this para poder encadenar
        */
        removeCategory(...categories) {
            for (const category of categories) {
                if (!(category instanceof Category)) throw new ErrorTypeExecption("category", "Category");
                if (!(this.#mapCategory.has(category.name))) throw new ObjectFalseException("category");
                this.#mapCategory.delete(category.name);
                console.log("<<<<<Categoría eliminada>>>>>");
            }
            return this;
        }

        /*
            Método con el que añadimos un menú
            Lanzamos excepción siempre que el menú sea nulo, si no es un
            objeto de esta clase o si ya se encuentra almacenado
            En caso contrario, procedemos a añadir el objeto
            Finalmente, tenemos que devolver this para poder encadenar
        */
        addMenu(...menus) {
            for (const menu of menus) {
                if (menu === null) throw new IncorrectValueException("menu");
                if (!(menu instanceof Menu)) throw new ErrorTypeExecption("menu", "Menu");
                if (this.#mapMenu.has(menu.name)) throw new ObjectTrueException("menu");
                this.#mapMenu.set(menu.name, {
                    menu,
                    dishes: []
                });
                console.log("<<<<<Menú añadido>>>>>");
            }
            return this;
        }

        /*
            Método para poder eliminar un menú
            Lanzamos excepción en caso de ser un objeto distinto o no encontrarse 
            almacenada. En caso contrario, eliminamos del mapa el menú deseado
            Finalmente, tenemos que devolver this para poder encadenar
        */
        removeMenu(...menus) {
            for (const menu of menus) {
                if (!(menu instanceof Menu)) throw new ErrorTypeExecption("menu", "Menu");
                if (!(this.#mapMenu.has(menu.name))) throw new ObjectFalseException("menu");
                this.#mapMenu.delete(menu.name);
                console.log("<<<<<Menú eliminado>>>>>");
            }
            return this;
        }

        /*
            Método con el que añadimos un alérgeno
            Lanzamos excepción siempre que el alérgeno sea nulo, si no es un
            objeto de esta clase o si ya se encuentra almacenado
            En caso contrario, procedemos a añadir el objeto
            Finalmente, tenemos que devolver this para poder encadenar
        */
        addAllergen(...allergens) {
            for (const allergen of allergens) {
                if (allergen === null) throw new IncorrectValueException("allergen");
                if (!(allergen instanceof Allergen)) throw new ErrorTypeExecption("allergen", "Allergen");
                if (this.#mapAllergen.has(allergen.name)) throw new ObjectTrueException("allergen");
                this.#mapAllergen.set(allergen.name, {
                    allergen,
                    dishes: []
                })
                console.log("<<<<<Alérgeno añadido>>>>>");
            }
            return this;
        }

        /*
            Método para poder eliminar un alérgeno
            Lanzamos excepción en caso de ser un objeto distinto o no encontrarse 
            almacenada. En caso contrario, eliminamos del mapa el alérgeno deseado
            Finalmente, tenemos que devolver this para poder encadenar
        */
        removeAllergen(...allergens) {
            for (const allergen of allergens) {

                if (!(allergen instanceof Allergen)) throw new ErrorTypeExecption("allergen", "Allergen");
                if (!(this.#mapAllergen.has(allergen.name))) throw new ObjectFalseException("allergen");
                this.#mapAllergen.delete(allergen.name);
                console.log("<<<<<Alérgeno eliminado>>>>>");
            }
            return this;
        }

        /*
            Método con el que añadimos un plato
            Lanzamos excepción siempre que el plato sea nulo, si no es un
            objeto de esta clase o si ya se encuentra almacenado
            En caso contrario, procedemos a añadir el objeto
            Finalmente, tenemos que devolver this para poder encadenar
        */
        addDish(...dishes) {
            for (const dish of dishes) {
                if (dish === null) throw new IncorrectValueException("dish");
                if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                if (this.#mapDish.has(dish.name)) throw new ObjectTrueException("dish");
                this.#mapDish.set(dish.name, { dish });
                console.log("<<<<<Plato añadido>>>>>");
            }
            return this;
        }

        /*
            Método para poder eliminar un plato
            Lanzamos excepción en caso de ser un objeto distinto o no encontrarse 
            almacenada. En caso contrario, eliminamos del mapa el plato deseado
            En este caso tenemos que eliminar, además del plato, todas sus asignaciones a
            categoría, alérgeno y menú
            Finalmente, tenemos que devolver this para poder encadenar
        */
        removeDish(...dishes) {
            for (const dish of dishes) {
                if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                if (!(this.#mapDish.has(dish.name))) throw new ObjectFalseException("dish");
                this.#mapDish.delete(dish.name);

                //Allergen
                for (const allergen of this.#mapAllergen.values()) {
                    let dishArray = allergen.dishes;

                    let pos = dishArray.findIndex((element) => element.dish.name === dish.name);

                    if (pos !== -1) {
                        dishArray.splice(pos, 1);
                    }
                }

                //Category
                for (const category of this.#mapCategory.values()) {
                    let dishArray = category.dishes;
                    let pos = dishArray.findIndex((element) => element.dish.name === dish.name);
                    if (pos !== -1) {
                        dishArray.splice(pos, 1);
                    }
                }

                //Menu
                for (const menu of this.#mapMenu.values()) {
                    let dishArray = menu.dishes;

                    let pos = dishArray.findIndex((element) => element.dish.name === dish.name);

                    if (pos !== -1) {
                        dishArray.splice(pos, 1);
                    }
                }
                console.log("<<<<<Plato eliminado>>>>>");
            }
            return this;
        }

        /*
            Método con el que añadimos un restaurante
            Lanzamos excepción siempre que el restaurante sea nulo, si no es un
            objeto de esta clase o si ya se encuentra almacenado
            En caso contrario, procedemos a añadir el objeto
            Finalmente, tenemos que devolver this para poder encadenar
        */
        addRestaurant(...restaurants) {
            for (const restaurant of restaurants) {
                if (restaurant === null) throw new IncorrectValueException("restaurant");
                if (!(restaurant instanceof Restaurant)) throw new ErrorTypeExecption("restaurant", "Restaurant");
                if (this.#mapRestaurant.has(restaurant.name)) throw new ObjectTrueException("restaurant");
                this.#mapRestaurant.set(restaurant.name, {
                    restaurant
                })
                console.log("<<<<<Restaurante añadido>>>>>");
            }
            return this;
        }

        /*
            Método para poder eliminar un restaurante
            Lanzamos excepción en caso de ser un objeto distinto o no encontrarse 
            almacenada. En caso contrario, eliminamos del mapa el restaurante deseado
            Finalmente, tenemos que devolver this para poder encadenar
        */
        removeRestaurant(...restaurants) {
            for (const restaurant of restaurants) {
                if (!(restaurant instanceof Restaurant)) throw new ErrorTypeExecption("restaurant", "Restaurant");
                if (!(this.#mapRestaurant.has(restaurant.name))) throw new ObjectFalseException("restaurant");
                this.#mapRestaurant.delete(restaurant.name);
                console.log("<<<<<restaurante eliminado>>>>>");
            }
            return this;
        }


        /*
            Método para asignar un plato a una categoría
            Comrpobamos que no sea nula y que el objeto category sea el correcto
            Se añade la categoría si no existe
        */
        assignCategoryToDish(category, ...dishes) {
            if (category === null) throw new IncorrectValueException("category");
            if (!(category instanceof Category)) throw new ErrorTypeExecption("category", "Category");
            if (!(this.#mapCategory.has(category.name))) {
                this.addCategory(category);
            }

            /*
                Comprobamos si el plato es nulo o si no es el objeto adecuado
                Se añade el plato si no existe
                Buscamos el plato en las categorías y vemos si hay que añadirlo
                Devolvemos this para poder encadenar
            */
            for (const dish of dishes) {
                if (dish === null) throw new IncorrectValueException("dish");
                if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                if (!(this.#mapDish.has(dish.name))) {
                    this.addDish(dish);
                }
                let pos = this.#mapCategory.get(category.name).dishes
                    .findIndex((element) => element.dish.name === dish.name);
                if (pos == -1) {
                    this.#mapCategory.get(category.name).dishes.push(this.#mapDish.get(dish.name));
                    console.log("El plato " + dish.name + " ha sido añadido a " + category.name);
                } else {
                    throw new ObjectTrueException("dish");
                }
            }
            return this;
        }

        /*
            Método para desasignar un plato de una categoría
            Comprobamos si es nula o si no es un objeto category
            Procedemos a ver si existe dicha categoría
        */
        deassignCategoryToDish(category, ...dishes) {
            if (category === null) throw new IncorrectValueException("category");
            if (!(category instanceof Category)) throw new ErrorTypeExecption("category", "Category");

            if (this.#mapCategory.has(category.name)) {
                /*
                    Comprobamos que se trate de un objeto plato y vemos en la posición
                    en la que se encuentra
                    Mostramos mensaje para saber que ha sido desasignado
                    Retornamos this para poder encadenar
                */
                for (const dish of dishes) {
                    if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                    let pos = this.#mapCategory.get(category.name).dishes.findIndex((elem) => elem.dish.name === dish.name);

                    if (pos !== -1) {
                        this.#mapCategory.get(category.name).dishes.splice(pos, 1);
                        console.log("El plato " + dish.name + " ha sido desasignado de " + category.name)
                    } else {
                        throw new ObjectFalseException("dish");
                    }
                }
            } else {
                throw new ObjectFalseException("category");
            }
            return this;
        }

        /*
            Método para asignar un plato a un alérgeno
            Comrpobamos que no sea nulo y que el objeto alérgeno sea el correcto
            Se añade el alérgeno si no existe
        */
        assignAllergenToDish(allergen, ...dishes) {
            if (allergen === null) throw new IncorrectValueException("allergen");
            if (!(allergen instanceof Allergen)) throw new ErrorTypeExecption("allergen", "Allergen");
            if (!(this.#mapAllergen.has(allergen.name))) {
                this.addAllergen(allergen);
            }

            /*
                Comprobamos si el plato es nulo o si no es el objeto adecuado
                Se añade el plato si no existe
                Buscamos el plato en las categorías y vemos si hay que añadirlo
                Devolvemos this para poder encadenar
            */
            for (const dish of dishes) {
                console.log(typeof dish)
                if (dish === null) throw new IncorrectValueException("dish");
                if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                if (!(this.#mapDish.has(dish.name))) {
                    this.addDish(dish);
                }
                let pos = this.#mapAllergen.get(allergen.name).dishes
                    .findIndex((element) => element.dish.name === dish.name);
                if (pos == -1) {
                    this.#mapAllergen.get(allergen.name).dishes.push(this.#mapDish.get(dish.name));
                    console.log("Al plato" + dish.name + " se le ha añadido el alérgeno " + allergen.name);
                } else {
                    throw new ObjectTrueException("dish");
                }
            }
            return this;
        }

        /*
            Método para desasignar un alérgeno de un plato
            Comprobamos si es nul o si no es un objeto alérgeno
            Procedemos a ver si existe dicho alérgeno
        */
        deassignAllergenToDish(allergen, ...dishes) {
            if (allergen === null) throw new IncorrectValueException("allergen");
            if (!(allergen instanceof Allergen)) throw new ErrorTypeExecption("allergen", "Allergen");

            if (this.#mapAllergen.has(allergen.name)) {
                /*
                    Comprobamos que se trate de un objeto plato y vemos en la posición
                    en la que se encuentra
                    Mostramos mensaje para saber que ha sido desasignado
                    Retornamos this para poder encadenar
                */
                for (const dish of dishes) {
                    if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                    let pos = this.#mapAllergen.get(allergen.name).dishes
                        .findIndex((element) => element.dish.name === dish.name);

                    if (pos !== -1) {
                        this.#mapAllergen.get(allergen.name).dishes.splice(pos, 1);
                        console.log("El plato " + dish.name + " ya no tiene el alérgeno " + allergen.name)
                    } else {
                        throw new ObjectFalseException("dish");
                    }
                }
            } else {
                throw new ObjectFalseException("allergen");
            }
            return this;
        }

        /*
            Método para asignar un plato a un menú
            Comrpobamos que no sea nulo y que el objeto menú sea el correcto
            Se añade el menú si no existe
        */
        assignDishToMenu(menu, ...dishes) {
            if (menu === null) throw new IncorrectValueException("menu");
            if (!(menu instanceof Menu)) throw new ErrorTypeExecption("menu", "Menu");
            if (!(this.#mapMenu.has(menu.name))) {
                this.addMenu(menu);
            }

            /*
                Comprobamos si el plato es nulo o si no es el objeto adecuado
                Se añade el plato si no existe
                Buscamos el plato y vemos si hay que añadirlo
                Devolvemos this para poder encadenar
            */
            for (const dish of dishes) {
                if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                if (!(this.#mapDish.has(dish.name))) {
                    this.addDish(dish);
                }

                let pos = this.#mapMenu.get(menu.name).dishes
                    .findIndex((element) => element.dish.name === dish.name);
                if (pos === -1) {
                    this.#mapMenu.get(menu.name).dishes.push(this.#mapDish.get(dish.name));
                    console.log("El plato " +dish.name+ "ha sido añadido a "+menu.name);
                } else {
                    throw new ObjectTrueException("dish");
                }
            }
            return this;
        }

        /*
            Método para desasignar un plato de un menú
            Comprobamos si es nulo o si no es un objeto menú
            Procedemos a ver si existe dicho menú
        */
        deassignDishToMenu(menu, ...dishes) {
            if (menu === null) throw new IncorrectValueException("menu");
            if (!(menu instanceof Menu)) throw new ErrorTypeExecption("menu", "Menu");

            if (this.#mapMenu.has(menu.name)) {
                /*
                    Comprobamos que se trate de un objeto plato y vemos en la posición
                    en la que se encuentra
                    Mostramos mensaje para saber que ha sido desasignado
                    Retornamos this para poder encadenar
                */
                for (const dish of dishes) {
                    if (!(dish instanceof Dish)) throw new ErrorTypeExecption("dish", "Dish");
                    let pos = this.#mapMenu.get(menu.name).dishes
                        .findIndex((element) => element.dish.name === dish.name);
                    if (pos !== -1) {
                        this.#mapMenu.get(menu.name).dishes.splice(pos, 1);
                        console.log("El plato " +dish.name + " ha sido eliminado de " + menu.name)
                    } else {
                        throw new ObjectTrueException("dish");
                    }

                }
            } else {
                throw new ObjectFalseException("menu");
            }
            return this;
        }

        /*
            Método con el que podemos intercambiar las posiciones de dos
            platos en un menú
            Primero comprobamos que los objetos menú y los dos platos sean adecaudos, si no,
            lanzamos excepción
            Procedemos a comprobar que el menú exista
        */
        changeDishesPositionsInMenu(menu, dish1, dish2) {
            if (!(menu instanceof Menu)) throw new ErrorTypeExecption("menu", "Menu");
            if (!(dish1 instanceof Dish)) throw new ErrorTypeExecption("dish1", "Dish");
            if (!(dish2 instanceof Dish)) throw new ErrorTypeExecption("dish2", "Dish");

            /*
                Primero vemos si el menú está en el mapa y cogemos su posición
                Lo hacemos con cada plato y devolvemos excepción si el plato no existe
                En caso contrario, almacenamos los platos y los cambiamos de posición
            */
            if (this.#mapMenu.has(menu.name)) {
                const menuCollect = this.#getValuesMenuCollection(menu);
                let posDish1 = menuCollect.dishes.findIndex((element) => element.dish.name === dish1.name);
                if (posDish1 === -1) throw new ObjectFalseException("dish1");

                let posDish2 = menuCollect.dishes.findIndex((element) => element.dish.name === dish2.name);
                if (posDish2 === -1) throw new ObjectFalseException("dish2");

                let tempPosInMenuDish1 = menuCollect.dishes[posDish1];
                let tempPosInMenuDish2 = menuCollect.dishes[posDish2];

                menuCollect.dishes.splice(posDish1, 1, tempPosInMenuDish2);
                menuCollect.dishes.splice(posDish2, 1, tempPosInMenuDish1);
                console.log("El plato " + dish1.name + " y el plato " + dish2.name + " han cambiado su posición.");
            } else {
                throw new ObjectFalseException("menu");
            }
        }

        /*
            Método para obtener los platos de un menú
            Si es nulo o el objeto no es correcto, lanzamos excepción
            Verificamos que existe el alérgeno y creamos un array para conservar el anterior
            Ordenamos los platos y hacemos el iterador
        */
        *getDishesInMenu(menu, order = null){

            if(!(menu instanceof Menu)) throw new ErrorTypeExecption("menu", Menu);

            if(menu === null) throw new IncorrectValueException("menu");

            if(this.#mapMenu.has(menu.name)){
                const allDishes = [].concat(this.#mapMenu.get(menu.name).dishes);
                if(order){
                    allDishes.sort(order);
                }
    
                for(const d of allDishes){
                    yield d;
                }
            }
        }

        /*
            Creación de iterador para relacionar los platos existentes a una categoría
            Comprobamos que la categoría es nula o si no es el objeto adecuado
            Procedemos a comprobar si la categoría se encuentra en el mapa
        */
        *getDishesInCategory(category, order = null) {
            if (category === null) throw new IncorrectValueException("category");
            if (!(category instanceof Category)) throw new ErrorTypeExecption("category", "Category");

            if (this.#mapCategory.has(category.name)) {
                /*
                    Almacenamos los platos en un array nuevo y 
                    recibimos el order para poder ordenarlos
                    Finalmente, creamos el iterador
                */
                const dishArray = [].concat(this.#mapCategory.get(category.name).dishes);

                if (order) {
                    dishArray.sort(order);
                }
                for (const dish of dishArray) {
                    yield dish;
                }
            }
        }

        /*
            Creación de iterador con los platos que tienen un determinado alérgeno
            Comprobamos que el alérgeno es nulo o si no es el objeto adecuado
            Procedemos a comprobar si e alérgeno se encuentra en el mapa
        */
        *getDishesWithAllergen(allergen, order = null) {
            if (allergen === null) throw new IncorrectValueException("allergen");
            if (!(allergen instanceof Allergen)) throw new ErrorTypeExecption("allergen", "Allergen");

                /*
                    Almacenamos los platos en un array nuevo y 
                    recibimos el order para poder ordenarlos
                    Finalmente, creamos el iterador
                */
            if (this.#mapAllergen.has(allergen.name)) {
                const dishArray = [].concat(this.#mapAllergen.get(allergen.name).dishes);
                if (order) {
                    dishArray.sort(order);
                }
                for (const dish of dishArray) {
                    yield dish;
                }

            }
        }

        /*
            Creación de iterador que cumpla un criterio concreto en base a una 
            función de callback. El iterador puede estar orenado
            Lo primero es recoger los valores del mapa para pasarlo a array
        */
        *findDishes(order = null, search = null) {
            let dishMapValues = this.#mapDish.values();
            let dishArray = Array.from(dishMapValues);

            /*
                Filtramos el array para hacer la búsqueda y ordenamos
                Finalmente creamos el iterador
            */
            if (search) {
                dishArray = dishArray.filter(search);
            }

            if (order) {
                dishArray.sort(order);
            }
            for (const dish of dishArray) {
                yield dish;
            }
        }

        // Metodo que crea un plato y devuelve un objeto dish
        createDish(name) {
            // Declaramos la variable plato que vamos a devolver
            let dish;

            if (this.#mapDish.has(name)) {
                dish = this.#mapDish.get(name).dish;
            } else {
                dish = new Dish(name);
            }

            // Devolvemos el plato
            return dish;
        }

        /*
            Método con el que devolvemos un objeto menú si este está 
            registrado, si no se crea uno nuevo
            Buscamos el menú por el nombre y lo obtenemos si lo encuentra
            Si no, creamos uno
            En cualquiera de los casos, devolvemos el menú
        */
        createMenu(name) {
            let menu;

            if (this.#mapMenu.has(name)) {
                menu = this.#mapMenu.get(name).menu;
            } else {
                menu = new Menu(name);
            }
            return menu;
        }

        /*
            Método con el que devolvemos un objeto alérgeno si este está 
            registrado, si no se crea uno nuevo
            Buscamos el alérgeno por el nombre y lo obtenemos si lo encuentra
            Si no, creamos uno
            En cualquiera de los casos, devolvemos el alérgeno
        */
        createAllergen(name) {
            let allergen;

            if (this.#mapAllergen.has(name)) {
                allergen = this.#mapAllergen.get(name).allergen;
            } else {
                allergen = new Allergen(name);
            }
            return allergen;
        }

        /*
            Método con el que devolvemos un objeto categoría si esta está 
            registrada, si no se crea uno nuevo
            Buscamos la categoría por el nombre y la obtenemos si la encuentra
            Si no, creamos una
            En cualquiera de los casos, devolvemos la categoría
        */
        createCategory(name) {
            let category;

            if (this.#mapCategory.has(name)) {
                category = this.#mapCategory.get(name).category;
            } else {
                category = new Category(name);
            }
            return category;
        }

        /*
            Método con el que devolvemos un objeto restaurante si este está 
            registrado, si no se crea uno nuevo
            Buscamos el restaurante por el nombre y lo obtenemos si lo encuentra
            Si no, creamos uno
            En cualquiera de los casos, devolvemos el restaurante
        */
        createRestaurant(name) {
            let restaurant;

            if (this.#mapRestaurant.has(name)) {
                restaurant = this.#mapRestaurant.get(name).restaurant;
            } else {
                restaurant = new Restaurant(name);
            }
            return restaurant;
        }

        /*
            Metodo para mostrar en nuestra web tres platos aleatorios cada vez que la abrimos
            Almacenamos los platos en un array los platos y dejamos uno vacío para guardarlos luego
            El array siempre tendrá tres platos obligatoriamente para poder obtener el aleatorio, y 
            tampoco puede estar repetido
            Una vez completado, devolvemos los platos obtenidos
        */
        showThreeRandomDishes(){

            let random = [];
            let arrayDishes = Array.from(this.#mapDish.values());

            while(random.length != 3){

                const randomNumber = Math.floor(Math.random()*arrayDishes.length);

                let exist = random.find(
                    (dish) => dish.dish.name === arrayDishes[randomNumber].name
                );
                if(!exist) random.push(arrayDishes[randomNumber]);
            }

            return random;
        }
    }

    /*
        Método que nos va a permitir crear las instancias necesarias
        en el patrón Singleton
    */
    function createInstance() {
        const manager = new Manager();
        return manager;
    }

    /*
        En caso de que la instancia no se encuentre, la creamos
        Devolvemos la instancia
    */
    return {
        getInstance () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

export default Manager;