describe('filter', function() {
  it('should return all even numbers in an array', function() {
    var isEven = function(num) { return num % 2 === 0; };
    var evens = filter([1, 2, 3, 4, 5, 6], isEven);

    expect(evens).to.eql([2, 4, 6]);
  });

  it('should return all odd numbers in an array', function() {
    var isOdd = function(num) { return num % 2 !== 0; };
    var odds = filter([1, 2, 3, 4, 5, 6], isOdd);

    expect(odds).to.eql([1, 3, 5]);
  });
});

describe('uniq', function() {
  it('should return all unique values contained in an unsorted array', function() {
    var list = [1, 2, 1, 3, 1, 4];

    expect(_.uniq(list)).to.eql([1, 2, 3, 4]);
  });

  it('should handle iterators that work with a sorted array', function() {
    var iterator = function(value) { return value +1; };
    var list = [1, 2, 2, 3, 4, 4];

    expect(_.uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
  });
});