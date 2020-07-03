var Person = function(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function () {
    console.log("name     " + this.name);
}

var Teacher = function (name,age) {
    Person.call(this,name,age);
}

Teacher.prototype = Object.create(Person.prototype);

Person.prototype.teach = function (subject) {
   return this.name + " is now teaching " + subject;
}

var person1 = new Person("murad" + 20);
var teacher1 = new Teacher("ben" , 25 );


person1.introduce();
teacher1.introduce();

document.write(teacher1.teach("Maths"));
