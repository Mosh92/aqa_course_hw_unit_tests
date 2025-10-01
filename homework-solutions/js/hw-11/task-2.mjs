class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  #isLatinString(value) {
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
        return false;
      }
    }
    return true;
  }
  #isLatinOrSpace(value) {
    const code = value.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || code === 32;
  }

  set firstName(value) {
    if (typeof value === 'string' && value.length >= 2 && value.length <= 50 && this.#isLatinString(value)) {
      this._firstName = value;
    } else throw new Error('wrong data type');
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value === 'string' && value.length >= 2 && value.length <= 50 && this.#isLatinString(value)) {
      this._lastName = value;
    } else throw new Error('Wrong data type');
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value === 'string' && value.length > 0 ) {
      this._profession = value;
    } else throw new Error('Wrong data Type');
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) {
        throw new Error('Profession cannot be empty or contain only spaces');
    }
    
    for (let i = 0; i < trimmedValue.length; i++) {
        if (!this.#isLatinOrSpace(trimmedValue[i])) {
            throw new Error('Wrong profession');
        }
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value === 'number' && value > 0 && value < 10000) {
      this.#salary = value;
    } else {
      throw new Error('salary must be a non-negative number');
    }
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees = [];

  constructor(title, phone, address, employees) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    // this.#employees = employees;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value === 'string') {
      this._title = value;
    } else throw new Error('wrong data type');
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    //if (typeof value === 'number') {
      this._phone = value;
   // } else throw new Error('wrong data type');
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value === 'string') {
      this._address = value;
    } else throw new Error('wrong data type');
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
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${company.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const foundEmployee = this.#employees.find((employee) => employee.firstName === firstName);
    if (foundEmployee) {
      return foundEmployee;
    } else {
      throw new Error('Employee not found');
    }
  }
  #getEmployeeIndex(firstName) {
    const index = this.#employees.findIndex((employee) => employee.firstName === firstName);
    if (index === -1) {
      throw new Error('Employee not found');
    }
    return index;
  }
  removeEmployee(firstName) {
    let foundIndex = this.#getEmployeeIndex(firstName);
    this.#employees.splice(foundIndex, 1);
  }
  getTotalSalary() {
    return (this.#employees.length > 0)?this.#employees.reduce((fullSalary, emp) => emp.salary + fullSalary, 0): 0 ;
  }
}
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', 123456, 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
