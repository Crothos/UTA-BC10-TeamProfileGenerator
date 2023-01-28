const Employee = require("../lib/Employee");


describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with Name, Employee Number, and Email", () => {
            const employee = new Employee('Stephen', '068', 's.g.totten@gmail.com');
            expect(employee.name).toEqual("Stephen");
            expect(employee.id).toEqual("068");
            expect(employee.email).toEqual("s.g.totten@gmail.com");
        });
    });

});