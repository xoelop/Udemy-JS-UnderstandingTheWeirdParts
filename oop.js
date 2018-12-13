class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    } 

    greet() {
        return 'Hi ' + this.firstname;
    }

}

class Teacher extends Person {
    constructor(firstname, lastname, subject) {
        super(firstname, lastname);
        this.subject = subject;
    }
}


var john = new Teacher('John', 'Doe', 'art');