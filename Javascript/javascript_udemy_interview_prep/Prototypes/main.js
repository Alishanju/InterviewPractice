// Design the same classes by using only Javascript prototypes
/*
In JavaScript, every object has a hidden property called [[Prototype]] (commonly accessed using __proto__).

This [[Prototype]] is a reference to another object from which it can inherit properties and methods.

When you access a property/method on an object, JavaScript looks for it on the object itself.

If not found, it looks up the chain via the prototype.

This lookup continues until it reaches Object.prototype, the root of all objects.
*/
var Employee=function(id,name){
    this.id=id;
    this.name=name;
}
 Employee.prototype.setSalary=function(salary){
        this.salary=salary;
    }

 Employee.prototype.getId=function(){
        return this.id;
    }

     Employee.prototype.getName=function(){
        return this.name;
    }
     Employee.prototype.getSalary=function(){
        return this.salary;
    }

//prototype inheritance
var Manager=function(params){
    Employee.apply(this,arguments)
}

Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.constructor=Manager;
  Manager.prototype.setDepartment=function(dep){
        this.dep=dep;
    }
    Manager.prototype.getDepartment=function(){
        return this.dep;
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
