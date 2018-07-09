const Person = require('./person');

class Teacher extends Person{
    constructor(name, age, clazz){
        super(name, age);
        this.klass = clazz;
    }

    introduce(){
        return `${super.introduce()} I am a Teacher. I teach ${this.klass === undefined ? 'No Class' : 'Class ' + this.klass.number}.`;
    }

    introduceWith(student){
        let teached = false;
        if(this.klass !== undefined && this.klass.number === student.klass.number)
            teached = true;
        return `${super.introduce()} I am a Teacher. ${teached === true ? 'I teach ' + student.name + '.' : 'I don\'t teach ' + student.name + '.'}`;
    }
}

module.exports = Teacher;