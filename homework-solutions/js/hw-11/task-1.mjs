class Employee {
  #salary
   
   constructor(firstName, lastName , profession , salary){
    this.firstName =firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
   }

   get firstName(){
    return this._firstName;
   }

   set firstName(value){
    if(typeof value === 'string'){
      this._firstName = value;
    } else throw new Error('wrong data type')
   }
  
  get lastName(){
    return this._lastName;
  }

  set lastName(value){
    if(typeof value === 'string'){
      this._lastName = value;
    } else throw new Error('Wrong data type')
  }

  get profession(){
    return this._profession;
  }

  set profession(value){
    if(typeof value === 'string'){
      this._profession = value;
    } else throw new Error('Wrong data Type')
  }

  get salary(){
    return this.#salary;
  }

  set salary(value) {
        if (typeof value === 'number' && value >= 0) {
            this.#salary = value;
        } else {
            throw new Error('salary must be a non-negative number');
        }
    }

  getFullName(){
    return `${this._firstName} ${this._lastName}`
  } 
}
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100

class Company {
#employees = [];

  constructor(title, phone, address, employees){
    this.title = title;
    this.phone = phone;
    this.address = address;
   // this.#employees = employees;
  }

  get title(){
    return this._title;
  }

  set title(value){
    if(typeof value === 'string'){
      this._title = value;
    } else throw new Error('wrong data type')
  }

  get phone(){
    return this._phone;
  }

  set phone(value){
    if(typeof value === 'number'){
      this._phone = value;
    } else throw new Error('wrong data type')
  }

  get address(){
    return this._address;
  }

  set address(value){
    if(typeof value === 'string'){
      this._address = value;
    } else throw new Error('wrong data type')
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
        this.#employees.push(employee);
     } else {
         throw new Error('Employee must be an instance of Employee class');
   }
  }
    
  getEmployees() {
    return [...this.#employees]; 
   }
  getInfo(){
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${company.#employees.length}`
  }
   
}
const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
 console.log(company.getInfo()); // [Employee, Employee]

export { Employee, Company };
