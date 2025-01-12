function Academy(academyName,numberOfGroups,numberOfClassrooms){
    this.academyName = academyName;
    this.numberOfGroups = numberOfGroups;
    this.numberOfClassrooms = numberOfClassrooms;

    this.displayAcademyName = function(){
        console.log(`${this.academyName}`);
    };
}

function Student(firstName, lastName, age, eMail,academy, academyGroup){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eMail = eMail;
    this.academy = academy;
    this.academyGroup = academyGroup;

    this.displayStudentsAcademy = function(){
        console.log(`${this.academy.academyName}`);
        
    };
}

function Group(name,numberOfStudents,students=[]){
    this.name = name;
    this.numberOfStudents = numberOfStudents;
    this.students = students;
    
    this.displayNumber = function(){
        console.log(`${this.numberOfStudents}`);
    };
}

let academy = new Academy("Qinshift", 12, 4);
let student = new Student("Ana","Marjanovik",22,"ana.marjanovik@gmail.com",academy,"G2");
let group = new Group("G2",4,['Ana','Sandra','Simona','Angel']);

academy.displayAcademyName();
student.displayStudentsAcademy();
group.displayNumber();





