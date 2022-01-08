const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Saruman", "001", "saruman@mordor.com", "100");

    expect(manager.name).toBe("Saruman");
    expect(manager.id).toBe("001");
    expect(manager.email).toBe("saruman@mordor.com");
    expect(manager.office).toBe("100");
});

test("gets employee's role", () => {
    const employee = new Manager("Saruman", "001", "saruman@mordor.com", "100");

    expect(employee.getRole()).toBe("Manager");
});