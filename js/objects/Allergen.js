import {EmptyElementException, TypeErrorException} from "../Exception.js";
/**
 * Creación de la clase Allergen, que nos va a permitir almacenar
 * todos los alimentos que sean alérgenos
 */
class Allergen {

    //Primero definimos las propiedades que va a tener Allergen
    #name;
    #description;

    /*
        Definición del constructor de la clase Allergen
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce un nombre de alérgeno,
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
    constructor(name) {

        if (name === undefined || name === "") throw new EmptyElementException("name");

        if (!(new.target === Allergen)) throw new TypeErrorException("Allergen");

        this.#name = name;
        this.#description = null;
    }

    /*
        Creación de getters y setters de la clase Allergen para poder
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
        posteriormente el contenido de los objetos de tipo alérgeno
    */
        toString(){
            return `Nombre del alérgeno: ${this.#name}, Descripción: ${this.#description}`;
        }
}

export{Allergen};