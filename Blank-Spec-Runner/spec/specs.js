//chair assertion library http://chaijs.com/api/bdd/

var expect = chai.expect;

describe("object name", function() {
  // create object you're going to test and set to var here.

  it('should exist', function() {
    expect().to.exist;
  });

  it('should equal something', function() {
    //equivalent to ===
    expect().to.equal();
  });

  it('should be something', function() {
    expect().to.be();
  });

  it('should be true', function() {
    expect().to.be.true;
  });

  it('should be false', function() {
    expect().to.be.false;
  });

  it('should have a key or property', function() {
    //using in objects
    expect().to.have.property(name, [value])
  });
  
  it("should be an instanceof", function(){
    //checks constructor property
    expect().to.be.an.instanceof();
  });
 
});

