const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("Gothmog", "002", "gothmog@mordor.com", "GothmogHub");

    expect(engineer.name).toBe("Gothmog");
    expect(engineer.id).toBe("002");
    expect(engineer.email).toBe("gothmog@mordor.com");
    expect(engineer.github).toBe("GothmogHub");
});

test("gets engineer's GitHub username", () => {
    const engineer = new Engineer("Gothmog", "002", "gothmog@mordor.com", "GothmogHub");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
})

test("gets engineer's role", () => {
    const engineer = new Engineer("Gothmog", "002", "gothmog@mordor.com", "GothmogHub");

    expect(engineer.getRole()).toBe("Engineer");
});