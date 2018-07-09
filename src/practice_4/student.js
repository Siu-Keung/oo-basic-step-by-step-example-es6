const Person = require('./person');

class Student extends Person{
    constructor(name, age, clazz){
        super(name, age);
        this.klass = clazz;
    }

    introduce(){
        return `${super.basic_introduce()} I am a Student. I am at Class ${this.klass}.`;
    }
}

module.exports = Student;
