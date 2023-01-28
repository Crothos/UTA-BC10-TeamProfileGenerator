const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should be able to pull Employee info and add github info", () => {
            const engineer = new Engineer('Stephen', '068', 's.g.totten@gmail.com', 'Crothos');
            expect(engineer.name).toEqual("Stephen");
            expect(engineer.id).toEqual("068");
            expect(engineer.email).toEqual("s.g.totten@gmail.com");
            expect(engineer.github).toEqual("Crothos");
        });
    });

});