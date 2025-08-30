// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property

class Employee{
    constructor(id,name){
        if(!name || !id){
            throw new Error("Employee Name and id are mandatory");
        }
        this.id=id;
        this.name=name;
    }

    setSalary(salary){
        this.salary=salary;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
}

class Manager extends Employee{
    setDepartment(dep){
        this.dep=dep;
    }
    getDepartment(){
        return this.dep;
    }
}

const employee=new Employee(1,"Alisha");
employee.setSalary("1LPA");

console.log(employee) //Employee { id: 1, name: 'Alisha', salary: '1LPA' }
console.log(employee.getId()) //1
console.log(employee.getName()) //Alisha
console.log(employee.getSalary()) //1LPA

const manager=new Manager(2,"Anjum");
manager.setDepartment("React");
console.log(manager) //Manager { id: 2, name: 'Anjum', dep: 'React' }

const manager2=new Manager(2,"Anjum");
manager2.setDepartment("React");
manager2.setSalary("2LPA");
console.log(manager2) //Manager { id: 2, name: 'Anjum', dep: 'React', salary: '2LPA' }
/*

extends does not only take constructors.
It inherits:

the parent’s constructor (if child doesn’t define its own),

all prototype methods,

static methods,

and allows overriding.
*/