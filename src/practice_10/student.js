

const Person = require('./person');

class Student extends Person{
    constructor(id, name, age, clazz){
        super(id, name, age);
        this.klass = clazz;
        clazz.appendMember(this);
    }

    introduce(){
        let leaderStr = `I am at Class ${this.klass.number}.`;
        if(this.klass.leader)
            leaderStr = `I am Leader of Class ${this.klass.number}.`;
        let result = `${super.introduce()} I am a Student. ` + leaderStr;
        return result;
    }

    setClass(clazz){
        this.klass = clazz;
    }

    equal(student){
        return student.id === this.id;
    }

}

module.exports = Student;
