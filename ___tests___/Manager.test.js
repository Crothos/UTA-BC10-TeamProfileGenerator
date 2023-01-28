const Manager = require("../lib/Manager");


describe("Manager", () => {
    describe("Initialization", () => {
        it("should be able to pull Employee info and add office info", () => {
            const manager = new Manager('Stephen', '068', 's.g.totten@gmail.com', 'UTA');
            expect(manager.name).toEqual("Stephen");
            expect(manager.id).toEqual("068");
            expect(manager.email).toEqual("s.g.totten@gmail.com");
            expect(manager.officeNumber).toEqual("UTA");
        });
    });

});