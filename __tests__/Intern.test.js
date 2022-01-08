const Intern = require("../lib/Intern");

test("creates an engineer object", () => {
    const intern = new Intern("Uruk-hai", "003", "uruk-hai@mordor.com", "Mordor Training Camp");

    expect(intern.name).toBe("Uruk-hai");
    expect(intern.id).toBe("003");
    expect(intern.email).toBe("uruk-hai@mordor.com");
    expect(intern.school).toBe("Mordor Training Camp");
});

test("gets intern's school", () => {
    const intern = new Intern("Uruk-hai", "003", "uruk-hai@mordor.com", "Mordor Training Camp");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
})

test("gets intern's role", () => {
    const intern = new Intern("Uruk-hai", "003", "uruk-hai@mordor.com", "Mordor Training Camp");

    expect(intern.getRole()).toBe("Intern");
});