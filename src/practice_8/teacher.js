const Person = require('./person');

class Teacher extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        let result = `${super.introduce()} I am a Teacher. `;
        result += this.klass ? `I teach Class ${this.klass.number}.` : `I teach No Class.`;
        return result;
    }

}

module.exports = Teacher;