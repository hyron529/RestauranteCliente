import { IncorrectValueException } from "../Exception.js";

/**
 * Creación de la clase Category, que nos va a permitir crear la
 * estructura de todas las categorías de las que vamos a disponer
 */
class Coordinate {

    //Primero definimos las propiedades que va a tener Coordinate

    #latitude;
    #longitude;

    /*
        Definición del constructor de la clase Coordinate
        En este caso, necesitamos introducir ambas propiedades para tener latitud y longitud
        Antes de definir las variables, hay que comprobar si lo que se ha introducido es un numero,
        y si cumple los valores establecidos 
    */
    constructor(latitude, longitude) {

        latitude = typeof latitude !== "undefined" ? Number(latitude).valueOf() : 0;
        longitude = typeof longitude !== "undefined" ? Number(longitude).valueOf() : 0;

        if (latitude <= -180 || latitude >= 180 || Number.isNaN(latitude)) {
            throw new IncorrectValueException("latitude");
        }

        if (longitude <= -180 || longitude >= 180 || Number.isNaN(longitude)) {
            throw new IncorrectValueException("longitude");
        }

        this.#latitude = latitude;
        this.#longitude = longitude;

    }

    /*
        Creación de getters y setters de la clase Coordinate para poder
        obtener los valores de cada objeto coordenada o asignarle un valor
    */

    get latitude() {
        return this.#latitude;
    }

    get longitude() {
        return this.#longitude;
    }

    set latitude(value) {
        latitude = typeof latitude !== "undefined" ? Number(latitude).valueOf() : 0;
        if ((Number.isNaN(latitude) || latitude < -90 || latitude > 90)) throw new IncorrectValueException("latitude");
        this.#latitude = value;
    }

    set longitude(value) {
        longitude = typeof longitude !== "undefined" ? Number(longitude).valueOf() : 0;
        if ((Number.isNaN(longitude) || longitude < -180 || longitude > 180)) throw new IncorrectValueException("longitude");
        this.#longitude = value;
    }

    // Generamos un string con las propiedades del objeto
    toString() {
        return `Coordinate [latitude = ${this.#latitude}, longitude = ${this.#longitude}]`;
    }
}

export { Coordinate };