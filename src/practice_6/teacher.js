

const Person = require('./person');

class Teacher extends Person{
    constructor(name, age, clazz){
        super(name, age);
        this.klass = clazz;
    }

    introduce(){
        return `${super.introduce()} I am a Teacher. I teach ${this.klass === undefined ? 'No Class' : 'Class ' + this.klass}.`;
    }
}

module.exports = Teacher;