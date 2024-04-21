//Parent class
class User {
    name;
    address;
    #phone;

    getInfo(){
        //
        return this;
    }
}

//child,derived class
class Student extends User { 

    email;
    educationLevel;

}

const student = new Student()
console.log(student)