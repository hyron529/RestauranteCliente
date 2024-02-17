import {EmptyElementException, TypeErrorException} from "../Exception.js";
/**
 * Creación de la clase Category, que nos va a permitir crear la
 * estructura de todas las categorías de las que vamos a disponer
 */
class Category {

    //Primero definimos las propiedades que va a tener Category

    #name;
    #description;

    /*
        Definición del constructor de la clase Category
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce una categoría
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
    constructor(name) {

        if (name === "" || name === undefined) throw new EmptyElementException("name");

        if (!(new.target === Category)) throw new TypeErrorException("Category");

        this.#name = name;
        this.#description = null;
    }

    /*
     Creación de getters y setters de la clase Category para poder
     obtener los valores de cada objeto plato o asignarle un valor
    */

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    set name(value) {
        if (value === undefined || value === "") throw new EmptyElementException("name");
        this.#name = value;
    }

    set description(value) {
        if (value === undefined || value === "") throw new EmptyElementException("description");
        this.#description = value;
    }

    /*
        Creación de toString, que nos va a servir para poder visualizar
        posteriormente el contenido de los objetos de tipo categoría
    */
    toString() {
        return `Nombre de la categoría: ${this.#name}, Descripción: ${this.#description}`;
    }
}

export {Category};