import {EmptyElementException, TypeErrorException} from "../Exception.js";
import {Coordinate} from "./Coordinate.js";

/**
 * Creación de la clase Restaurant, que nos va a permitir crear la
 * estructura de la cadena de restaurantes que queremos gestionar
 */
class Restaurant {

    //Primero definimos las propiedades que va a tener Restaurant

    #name;
    #description;
    #location;

    /*
        Definición del constructor de la clase Restaurant
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce un restaurante de forma adecauada
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
    constructor(name) {

        if (name === "" || name === undefined) throw new EmptyElementException("name");

        if (!(new.target === Restaurant)) throw new TypeErrorException("Restaurant");

        this.#name = name;
        this.#description = null;
        this.#location = null;
    }

    /*
     Creación de getters y setters de la clase Restaurant para poder
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

    set location(value) {
        if (value === undefined || value === null) throw new EmptyElementException("location");
        if (!(value instanceof Coordinate)) throw new ErrorTypeExecption(value, "Coordinate");
        this.#location = value;
    }

    /*
        Creación de toString, que nos va a servir para poder visualizar
        posteriormente el contenido de los objetos de tipo restaurante
    */
    toString() {
        return `Nombre del reataurante: ${this.#name}, Descripción: ${this.#description}, Ubicación: ${this.#location}`;
    }
}

export{Restaurant};
