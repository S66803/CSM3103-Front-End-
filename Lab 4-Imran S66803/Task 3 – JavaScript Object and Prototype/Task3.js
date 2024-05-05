//Instantiate object product
const product = {
    name: "Bike",
    quantity: 1,
    price: 8500
}

//Display object product
document.getElementById("prod1").innerHTML = "Product name: " + product.name;
document.getElementById("prod2").innerHTML = "Quantity: " + product.quantity;
document.getElementById("prod3").innerHTML = "Price: RM " + product.price.toFixed(2);

//Object book constructor
function Book(name, authorName) {
    this.name = name;
    this.authorName = authorName;
}

//Instantiate object book
const book = new Book("Harry Potter", "J.K. Rowling");

//Add the prototype property price
Book.prototype.price = 11000;

//Display object book
document.getElementById("book1").innerHTML = "Book name: " + book.name;
document.getElementById("book2").innerHTML = "Author name: " + book.authorName;
document.getElementById("book3").innerHTML = "Book price: RM " + book.price.toFixed(2);

//Parent object employee constructor
function Employee(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
}

//Child object Manager construtor
function Manager(name, id, salary, managerName, branch) {
    Employee.call(this, name, id, salary);
    this.managerName = managerName;
    this.branch = branch;
}

//Inherit all properties from Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

//Instantiate Employee and Manager objects
const employee = new Employee("M. Haikal", 14576, 3000.00);
const manager = new Manager("M. Zainal", 10210, 2500.00, "John Cena", "Poland");

//Display all the properties (employee)
document.getElementById("emp1").innerHTML = "Employee name: " + employee.name;
document.getElementById("emp2").innerHTML = "Employee ID: " + employee.id;
document.getElementById("emp3").innerHTML = "Employee salary: " + employee.salary;

//Display all the properties (manager)
document.getElementById("man1").innerHTML = "Employee name: " + manager.name;
document.getElementById("man2").innerHTML = "Employee ID: " + manager.id;
document.getElementById("man3").innerHTML = "Employee salary: " + manager.salary;
document.getElementById("man4").innerHTML = "Manager name: " + manager.managerName;
document.getElementById("man5").innerHTML = "Branch: " + manager.branch;