import {Dish} from "./Dish.js";
import {Allergen} from "./Allergen.js";
import {Category} from "./Category.js";
import {Menu} from "./Menu.js";
import {Restaurant} from "./Restaurant.js";
import {Coordinate} from "./Coordinate.js";
import {Manager} from "./Manager.js";

/*
    Función donde vamos a realizar todas las pruebas necesarias
    con las clases de objetos
*/
function testObjectsRestaurant(){

    console.log("<<<<<REALIZACIÓN DE PRUEBAS CON OBJETOS>>>>>");

    let dish = new Dish("Pizza barbacoa");
    dish.description = "Pizza casera barbacoa hecha en horno de piedra";
    dish.ingredients = ["Salsa barbacoa", "Carne de cerdo"];
    console.log(dish.toString());
    
    let allergen = new Allergen("Gluten");
    allergen.description = "Alérgeno en productos de trigo";
    console.log(allergen.toString());

    let category = new Category("Pizzas");
    category.description = "Sección con todas las pizzas disponibles";
    console.log(category.toString());

    let menu = new Menu("Menú 1");
    menu.description = "Menú que incluya una pizza.";
    console.log(menu.toString());

    let coordinate = new Coordinate(33, 99);

    let restaurant = new Restaurant("Pizza for you");
    restaurant.description = "Pizzería de Ciudad Real";
    restaurant.location = coordinate;
    console.log(restaurant.toString());

    console.log(coordinate.toString());
}

function testManagerRestaurant(){

    console.log("<<<<<REALIZACIÓN DE PRUEBAS EN MANAGER>>>>>");

    //Declaramos la instancia del Singleton
    const managerRest = Manager.getInstance();

    //Creamos objetos y los vamos añadiendo
    let dish = managerRest.createDish("Hamburguesa");
    dish.description = "Hecha con carne a la parrilla";
    dish.ingredients = ["Carne", "Pan", "Lechuga", "Queso"];

    let dish2 = managerRest.createDish("Arroz con leche");
    dish2.description = "Postre casero";
    dish2.ingredients = ["Leche", "Canela", "Arroz", "Limón"];

    let dish3 = managerRest.createDish("Pizza Margarita");
    dish3.description = "Pizza casera";
    dish3.ingredients = ["Tomate", "Queso", "Orégano", "Harina"];

    managerRest.addDish(dish, dish2, dish3);
    
    let category = managerRest.createCategory("Postres");
    let category2 = managerRest.createCategory("Hamburguesas");
    let category3 = managerRest.createCategory("Pizzas");

    managerRest.addCategory(category, category2, category3);

    let allergen = managerRest.createAllergen("Gluten");
    let allergen2 = managerRest.createAllergen("Lactosa");

    managerRest.addAllergen(allergen, allergen2);

    let menu = managerRest.createMenu("Menú rápido");
    let menu1 = managerRest.createMenu("Menú de la casa");

    managerRest.addMenu(menu, menu1);

    let restaurant = managerRest.createRestaurant("Pizza for you");

    managerRest.addRestaurant(restaurant);

    //Mostramos todo lo que hemos creado
    console.log(managerRest);

    //Realizamos las asignaciones
    managerRest.assignAllergenToDish(allergen, dish);
    managerRest.assignAllergenToDish(allergen2, dish2);

    managerRest.assignCategoryToDish(category, dish2);
    managerRest.assignCategoryToDish(category2, dish);

    managerRest.assignDishToMenu(menu, dish, dish2);
    managerRest.assignDishToMenu(menu1, dish3, dish2);

    console.log(managerRest);

    //Hacemos un cambio de posición
    managerRest.changeDishesPositionsInMenu(menu, dish2, dish);

    console.log(managerRest);

    //Hacemos eliminaciones
    managerRest.removeCategory(category3);
    managerRest.removeMenu(menu1);

    console.log(managerRest);

    //Hacemos desasignaciones
    managerRest.deassignAllergenToDish(allergen, dish);
    managerRest.deassignDishToMenu(menu, dish, dish2);
    managerRest.deassignCategoryToDish(category, dish2);

    console.log(managerRest);

    //Iteradores. Creamos funciones y realizamos pruebas de cada uno de ellos

    const orden = (a,b) => a.dish.name.localeCompare(b.dish.name);
    const buscar = (value) => value.dish.name.endsWith("a");

    let categoryIter = managerRest.getDishesInCategory(category2, orden);
    for (let dishIt of categoryIter) {
        console.log(dishIt.dish.toString());
    }

    let dishIter = managerRest.findDishes(orden, buscar);
    for (let dishIt of dishIter) {
        console.log(dishIt.dish.toString());
    }

    for (const allerIt of managerRest.allergens) {
        console.log(allerIt.allergen);
    }

    for (const cat of managerRest.categories) {
        console.log(cat.category);
    }

    for (const menuIt of managerRest.menus) {
        console.log(menuIt.menu);
    }

    for (const restIt of managerRest.restaurants) {
        console.log(restIt.restaurant);
    }

}

testObjectsRestaurant();
testManagerRestaurant();