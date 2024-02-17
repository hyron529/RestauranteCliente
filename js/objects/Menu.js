import {EmptyElementException, TypeErrorException} from "../Exception.js";

/**
 * Creación de la clase Menu, que nos va a permitir agregar los platos
 * que necesitemos
 */
class Menu {

    //Primero definimos las propiedades que va a tener Menu

    #name;
    #description;

    /*
        Definición del constructor de la clase Menu
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce una categoríael menú correctamente
        Una vez comprobado, podemos definir nuestras variables
    */
    constructor(name) {

        if (name === "" || name === undefined) throw new EmptyElementException("name");

        if (!(new.target === Menu)) throw new TypeErrorException("Menu");

        this.#name = name;
        this.#description = null;
    }

    /*
     Creación de getters y setters de la clase Menu para poder
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
        posteriormente el contenido de los objetos de tipo menú
    */
    toString() {
        return `Nombre del menú: ${this.#name}, Descripción: ${this.#description}`;
    }
}

export {Menu};
