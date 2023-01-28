const Intern = require("../lib/Intern");


describe("Intern", () => {
    describe("Initialization", () => {
        it("should be able to pull Employee info and add school info", () => {
            const intern = new Intern('Stephen', '068', 's.g.totten@gmail.com', 'UTA');
            expect(intern.name).toEqual("Stephen");
            expect(intern.id).toEqual("068");
            expect(intern.email).toEqual("s.g.totten@gmail.com");
            expect(intern.school).toEqual("UTA");
        });
    });

});