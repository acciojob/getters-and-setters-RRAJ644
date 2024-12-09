//complete this code
class Person {
	constructor(name,age){
		this._name = name
		this._age = age
	}

	get name (){
		return this._name
	}

	set age(newAge){
		if (newAge > 0) {
			this._age = newAge
		}
		else{
			console.error('Age must be a positive number.');
		}
	}
	
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`); // Uses getter for name.
	}
}

class Teacher extends Person {
	  teach() {
    console.log(`${this.name} is teaching`); // Uses getter for name.
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
