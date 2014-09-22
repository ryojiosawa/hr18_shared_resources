//chair assertion library http://chaijs.com/api/bdd/

var expect = chai.expect;


describe("Feline Superclass", function() {
  // create object you're going to test and set to var here.
  beforeEach(function() {
    feline = new Feline();
  });

  it('should exist', function() {
    expect(feline).to.exist;
  });

  it('should have 4 paws', function() {
    //equivalent to ===
    expect(feline.paws).to.equal(4);
  });

  it('should be a mammal', function() {
    expect(feline.mammal).to.be.true;
  });
});

describe("Cat Subclass", function() {
  // create object you're going to test and set to var here.
  beforeEach(function() {
    tabby = new Cat();
  });

  it('should exist', function() {
    expect(tabby).to.exist;
  });

  it('should have 4 paws', function() {
    //equivalent to ===
    expect(tabby.paws).to.equal(4);
  });

  it('should be a mammal', function() {
    expect(tabby.mammal).to.be.true;
  });

  it('should have the property subsistence', function() {
    expect(tabby).to.have.property('subsistence')
  });  

  it('subsistence should be kibbel', function() {
    expect(tabby.subsistence).to.equal('kibbel');
  });

  it('should have the property temperment', function() {
    expect(tabby).to.have.property('temperment')
  });
  
  it('temperment should be snarky', function() {
    expect(tabby.temperment).to.equal('snarky');
  });

  it('cat should have a sound function', function() {
    expect(tabby.sound).to.be.a('Function');
  });

  it('cat should be an instance of feline', function() {
    expect(tabby).to.be.an.instanceof(Feline);
  });

});

describe("Lion Subclass", function() {
  // create object you're going to test and set to var here.
  beforeEach(function() {
    simba = new Lion();
  });

  it('should exist', function() {
    expect(simba).to.exist;
  });

  it('should have 4 paws', function() {
    //equivalent to ===
    expect(simba.paws).to.equal(4);
  });

  it('should be a mammal', function() {
    expect(simba.mammal).to.be.true;
  });

  it('should have the property subsistence', function() {
    expect(simba).to.have.property('subsistence')
  });  

  it('subsistence should be wildlife', function() {
    expect(simba.subsistence).to.equal('wildlife');
  });

  it('should have the property mane', function() {
    expect(simba).to.have.property('mane')
  });

  it('should have a mane', function() {
    expect(simba.mane).to.be.true;
  });

  it('lion should have a sound function', function() {
    expect(simba.sound).to.be.a('Function');
  });

  it('lion should be an instance of feline', function() {
    expect(simba).to.be.an.instanceof(Feline);
  });

});

