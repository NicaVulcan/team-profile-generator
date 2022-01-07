class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return `ID: ${this.id}`;
    }
    getEmail() {
        return `Email: ${this.email}`;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;
