describe('Bubble Sort', function () {
    it('should return Sorted List', function () {
        chai.expect(bubble_Sort([3, 0, 2, 5, -1, 4, 1]))
    });
});

describe('Filter banned word', function () {
    it('banned string must match sample string', function () {
        chai.expect(censor("This is banned sentence is a nice and foo word are not allow").trim()).to.equal("This XX banned sentence XX a XXXX and XXX word are not allow");
    });
});