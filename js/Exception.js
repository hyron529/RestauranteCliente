/*
    Creación de las excepciones que vamos a necesitar en 
    el proyecto, en este caso, para comprobar el operador new, elementos vacíos,
    cuando el tipo no es el correcto o cuando los valores introducidos
    no son los que se piden
*/

/*
    Para poder utilizar las excepciones mencionadas anteriormente, es necesario
    crear nuestra BaseException, que será una base que todas las excepciones van a 
    tener en común
*/
class BaseException extends Error {
    constructor (message = "", fileName, fileNumber) {
        super(message, fileName, fileNumber);
        this.name = "BaseException";
        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, BaseException);
        }
    }
}

class IncorrectValueException extends BaseException {
    constructor(value, fileName, fileNumber) {
        super(
            `Error. El valor introducido no es el adecuado.`,
            fileName,
            fileNumber
        );
        this.name = "IncorrectValueException";
        this.value = value;
    }
}

class EmptyElementException extends BaseException {
    constructor(value, fileName, fileNumber) {
        super(
            `Error. La propiedad indicada está vacía.`,
            fileName,
            fileNumber
        );
        this.name = "EmptyElementException";
        this.value = value;
    }
}

class TypeErrorException extends BaseException {
    constructor(value, fileName, fileNumber) {
        super(
            `Error. Es obligatorio utilizar el operador new.`,
            fileName,
            fileNumber
        );
        this.name = "TypeErrorException";
        this.value = value;
    }
}

class ErrorTypeExecption extends BaseException {
    constructor(value, type, fileName, fileNumber) {
        super(
            `Error. Debe introducir el tipo adecuado. ${value} ${type}`,
            fileName,
            fileNumber
        );
        this.name = "ErrorTypeExecption";
        this.value = value;
        this.type = type;
    }
}

class ObjectTrueException extends BaseException {
    constructor(value, fileName, fileNumber) {
        super(
            `Error. Este objeto ya existe.`,
            fileName,
            fileNumber
        );
        this.name = "ObjectTrueException";
        this.value = value;
    }
}

class ObjectFalseException extends BaseException {
    constructor(value, fileName, fileNumber) {
        super(
            `Error. Este objeto no existe.`,
            fileName,
            fileNumber
        );
        this.name = "ObjectFalseException";
        this.value = value;
    }
}

export {ErrorTypeExecption, EmptyElementException, TypeErrorException, IncorrectValueException, ObjectTrueException, ObjectFalseException};