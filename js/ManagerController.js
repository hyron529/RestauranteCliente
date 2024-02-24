import { Coordinate } from "./objects/Coordinate.js";

const MODEL = Symbol('ManagerModel');
const VIEW = Symbol('ManagerView');
const LOAD = Symbol('Carga de objetos');

class ManagerController {

    /*
        Constructor para el controlador que tiene por parámetro el modelo
        y la vista
        Definimos los eventos que queremos cargar y los iniciamos
    */
    constructor(model, view) {

        this[MODEL] = model;
        this[VIEW] = view;

        this.onLoad();
        this.onInit();
        this[VIEW].bindInit(this.handleInit);
    }

    [LOAD]() {

        //Creación de objetos de tipo plato
        let plato1 = this[MODEL].createDish('Pisto manchego');
        plato1.description = "Pisto casero con verduras cosechadas en nuestra tierra.";
        plato1.ingredients = ["Pimiento rojo", "Pimiento verde", "Huevo frito", "Tomate frito"];
        plato1.image = "./img/pisto.jpg";

        let plato2 = this[MODEL].createDish('Migas');
        plato2.description = "Migas de pastor, un plato tradicional elaborado con pan duro, panceta, chorizo y pimientos.";
        plato2.ingredients = ["Pan", "Panceta", "Chorizo", "Pimientos"];
        plato2.image = "./img/migas.jpg";

        let plato3 = this[MODEL].createDish('Gazpacho manchego');
        plato3.description = "Un guiso contundente de carne de caza, como liebre o conejo, acompañado de verduras y pan.";
        plato3.ingredients = ["Carne de caza", "Verduras", "Pan"];
        plato3.image = "./img/gazpacho_manchego.jpg";

        let plato4 = this[MODEL].createDish('Atascaburras');
        plato4.description = "Un puré de patatas con bacalao desmigado, ajo y nueces.";
        plato4.ingredients = ["Patatas", "Bacalao", "Ajo", "Nueces"];
        plato4.image = "./img/atascaburras.jpg";

        let plato5 = this[MODEL].createDish('Morteruelo');
        plato5.description = "Un paté manchego tradicional elaborado con carne de caza, pan, especias y manteca.";
        plato5.ingredients = ["Carne de caza", "Pan", "Especias", "Manteca"];
        plato5.image = "./img/morteruelo.jpg";

        let plato6 = this[MODEL].createDish('Caldereta');
        plato6.description = "Un guiso de cordero manchego con patatas y especias, típico de la región.";
        plato6.ingredients = ["Cordero", "Patatas", "Especias"];
        plato6.image = "./img/caldereta.jpg";

        let plato7 = this[MODEL].createDish('Tiznao');
        plato7.description = "Un plato elaborado con bacalao desmigado, pimientos, tomates y cebolla.";
        plato7.ingredients = ["Bacalao", "Pimientos", "Tomates", "Cebolla"];
        plato7.image = "./img/tiznao.jpg";

        let plato8 = this[MODEL].createDish('Gachas manchegas');
        plato8.description = "Un plato de harina de almortas o harina de trigo con agua, aceite y sal.";
        plato8.ingredients = ["Harina de almortas", "Agua", "Aceite", "Sal"];
        plato8.image = "./img/gachas.webp";

        let plato9 = this[MODEL].createDish('Bizcocho de calabaza');
        plato9.description = "Un delicioso bizcocho esponjoso elaborado con puré de calabaza, canela y nueces.";
        plato9.ingredients = ["Puré de calabaza", "Harina", "Azúcar", "Canela", "Nueces"];
        plato9.image = "./img/bizcocho_calabaza.jpg";

        let plato10 = this[MODEL].createDish('Miguelitos de la Roda');
        plato10.description = "Dulce hojaldrado relleno de crema pastelera y espolvoreado con azúcar glas.";
        plato10.ingredients = ["Hoja de masa", "Crema pastelera", "Azúcar glas"];
        plato10.image = "./img/miguelitos.jpg";

        let plato11 = this[MODEL].createDish('Rosquillos de vino');
        plato11.description = "Rosquillos crujientes hechos con vino y aromatizados con anís.";
        plato11.ingredients = ["Harina", "Azúcar", "Vino", "Anís"];
        plato11.image = "./img/rosquillos_vino.jpg";

        let plato12 = this[MODEL].createDish('Gachas dulces');
        plato12.description = "Un postre tradicional a base de harina de almortas, leche, azúcar y canela.";
        plato12.ingredients = ["Harina de almortas", "Leche", "Azúcar", "Canela"];
        plato12.image = "./img/gachas_dulces.jpg";


        //Creación de objetos de tipo categoría
        let cat1 = this[MODEL].createCategory('Tapas');
        cat1.description = "Productos caseros de tapeo.";

        let cat2 = this[MODEL].createCategory('Segundos');
        cat2.description = "Platos tradicionales con productos manchegos.";

        let cat3 = this[MODEL].createCategory('Postres');
        cat3.description = "Los mejores postres de la comarca.";

        //Creación de objetos de tipo restaurante
        let rest1 = this[MODEL].createRestaurant("Gastromacha I");
        rest1.description = "Disfruta de la gastronomia manchega en Ciudad Real."
        rest1.location = new Coordinate("44.25", "33.33");

        let rest2 = this[MODEL].createRestaurant("Gastromacha II");
        rest2.description = "Disfruta de la gastronomia manchega en Toledo."
        rest2.location = new Coordinate("53.99", "38.88");

        let rest3 = this[MODEL].createRestaurant("Gastromacha III");
        rest3.description = "Disfruta de la gastronomia manchega en Albacete."
        rest3.location = new Coordinate("25.66", "29.10");

        //Creación de objetos de tipo Alérgeno
        let al1 = this[MODEL].createAllergen('Gluten');
        let al2 = this[MODEL].createAllergen('Huevo');
        let al3 = this[MODEL].createAllergen('Lactosa');
        let al4 = this[MODEL].createAllergen('Pescado');

        //Creación de objetos de tipo menú
        let menu1 = this[MODEL].createMenu('Atacsamenú');
        let menu2 = this[MODEL].createMenu('Vaya pisto de menú');
        let menu3 = this[MODEL].createMenu('Menú guisos');

        //Asignación de elementos

        this[MODEL].addRestaurant(rest1, rest2, rest3);

        this[MODEL].addAllergen(al1, al2, al3, al4);

        this[MODEL].assignCategoryToDish(cat1, plato1, plato3, plato4, plato5);
        this[MODEL].assignCategoryToDish(cat2, plato2, plato6, plato7, plato8);
        this[MODEL].assignCategoryToDish(cat3, plato9, plato10, plato11, plato12);

        this[MODEL].assignAllergenToDish(al1, plato2, plato5, plato8, plato9, plato10, plato11, plato12);
        this[MODEL].assignAllergenToDish(al2, plato1, plato9);
        this[MODEL].assignAllergenToDish(al3, plato12);
        this[MODEL].assignAllergenToDish(al4, plato7, plato4);

        this[MODEL].assignDishToMenu(menu1, plato1, plato2, plato6, plato11);
        this[MODEL].assignDishToMenu(menu2, plato3, plato7, plato12, plato9);
        this[MODEL].assignDishToMenu(menu3, plato4, plato5, plato8, plato10);
    }


    /*
        Creción de métodos para cargar e iniciar los métodos definidos
        además de los manejadores de eventos necesarios para el funcionamiento
        adecuado de nuestra página 
    */
    onLoad = () => {
        this[LOAD]();
        this.onAddCategory();
        this.onAddAllergen();
        this.onAddMenu();
        this.onAddRestaurant();
    };

    onInit = () => {
        this[VIEW].showAllCategories(this[MODEL].categories);
        this[VIEW].bindCategoryList(this.handleDishInCategory);
        this[VIEW].randomDishes(this[MODEL].showThreeRandomDishes());
        this[VIEW].bindRandomDishes(this.handleRandomDishes);
    }

    handleInit = () => {
        this.onInit();
    }

    handleDisplayDish = (name) => {
        const dish = this[MODEL].createDish(name);
        this[VIEW].showDish(dish);
    }

    handleDisplayRestaurant = (name) => {
        const restaurant = this[MODEL].createRestaurant(name);
        this[VIEW].showRest(restaurant);
    }

    handleRandomDishes = (name) => {
        const dish = this[MODEL].createDish(name);
        this.handleDisplayDish(dish.name);
    }

    handleDishInCategory = (name) => {
        const category = this[MODEL].createCategory(name);
        this[VIEW].listDishes(
            this[MODEL].getDishesInCategory(category),
            category.name
        );
        this[VIEW].bindShowDish(this.handleDisplayDish);
    }

    handleDishInAllergen = (name) => {
        const allergen = this[MODEL].createAllergen(name);
        this[VIEW].listDishes(
            this[MODEL].getDishesWithAllergen(allergen),
            allergen.name
        );
        this[VIEW].bindShowDish(this.handleDisplayDish);
    };

    handleDishInMenu = (name) => {
        const menu = this[MODEL].createMenu(name);
        this[VIEW].listDishes(
            this[MODEL].getDishesInMenu(menu),
            menu.name
        );
        this[VIEW].bindShowDish(this.handleDisplayDish);
    }

    

    /*
        Funciones para mostrar en el navegador las categorías, alérgenos, menús
        y restaurantes
    */
    onAddCategory = () => {
        this[VIEW].showCategoriesInNavBar(this[MODEL].categories);
        this[VIEW].bindCategoryListInNavBar(this.handleDishInCategory);
    }

    onAddAllergen = () => {
        this[VIEW].showAllergensInNavBar(this[MODEL].allergens);
        this[VIEW].bindAllergenListInNavBar(this.handleDishInAllergen);
    }

    onAddMenu = () => {
        this[VIEW].showMenuInNavBar(this[MODEL].menus);
        this[VIEW].bindMenuListInNavBar(this.handleDishInMenu);
    }

    onAddRestaurant = () => {
        this[VIEW].showRestaurantInNavBar(this[MODEL].restaurants);
        this[VIEW].bindRestInNavBar(this.handleDisplayRestaurant);
    }

}

export default ManagerController;