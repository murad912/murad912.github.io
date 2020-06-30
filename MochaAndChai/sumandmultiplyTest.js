describe('Sum numbers', function () {
    it('should return sum of arguments', function () {
        chai.expect(sum(1, 2)).to.equal(3);
    });
});

describe('Multiply numbers', function () {
    it('should return the product of arguments', function () {
        chai.expect(multiply(2, 2)).to.equal(4);
    });
});

describe('Reverese a String', function () {
    it('reversed string must match sample string', function () {
        chai.expect(reverse("murad")).to.equal("darum");
    });
});