import {EmptyElementException, TypeErrorException, ErrorTypeExecption} from "../Exception.js";

/**
 * Creación de la clase Dish, que nos va a permitir almacenar
 * todos los objetos de tipo plato deseados
 */
class Dish{

    //Primero definimos las propiedades que va a tener Dish

    #name;
    #description;
    #ingredients;
    #image;

    /*
        Definición del constructor de la clase Dish
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce un nombre de plato,
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
    constructor(name){

        if (name === undefined || name === "") throw new EmptyElementException("name");

        if (!(new.target == Dish)) throw new TypeErrorException("Dish");

        this.#name = name;
        this.#description = null;
        this.#ingredients = null;
        this.#image = null;
    }

    /*
        Creación de getters y setters de la clase Dish para poder
        obtener los valores de cada objeto plato o asignarle un valor
    */
    
    get name(){
        return this.#name;
    }

    get description(){
        return this.#description;
    }

    
    get ingredients () {
        let ingredientList = this.#ingredients;
        return {
            [Symbol.iterator]: () => {
                let nextIndex = 0;
                return {
                    next: () => ({
                        value: ingredientList[nextIndex++],
                        done: nextIndex > ingredientList.length
                    })
                };
            }
        };
    }

    get image() {
        return this.#image;
    }

    set name(value) {
        if (value == undefined || value == "") throw new EmptyElementException("name");
        this.#name = value;
    }

    set description(value) {
        if (value == undefined || value == "") throw new EmptyElementException("description");
        this.#description = value;
    }

    set ingredients(value = []) {
        if(!(Array.isArray(value))) throw new ErrorTypeExecption("ingredients", "array"); 
        this.#ingredients = value;
    }

    set image(value) {
        if (value == undefined || value == "") throw new EmptyElementException("image");
        this.#image = value;
    }

    /*
        Creación de toString, que nos va a servir para poder visualizar
        posteriormente el contenido de los objetos de tipo plato
    */
    toString(){
        return `Nombre del plato: ${this.#name}, Descripción: ${this.#description}, Ingredientes: ${this.#ingredients}, Imagen: ${this.#image}`;
    }
}

export {Dish};