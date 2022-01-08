const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Sauron", "000", "sauron@mordor.com");

    expect(employee.name).toBe("Sauron");
    expect(employee.id).toBe("000");
    expect(employee.email).toBe("sauron@mordor.com");
});

test("gets employee's name", () => {
    const employee = new Employee("Sauron", "000", "sauron@mordor.com");

    expect(employee.getName()).toBe(employee.name);
});

test("gets employee's ID", () => {
    const employee = new Employee("Sauron", "000", "sauron@mordor.com");

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets employee's email address", () => {
    const employee = new Employee("Sauron", "000", "sauron@mordor.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets employee's role", () => {
    const employee = new Employee("Sauron", "000", "sauron@mordor.com");

    expect(employee.getRole()).toBe("Employee");
});