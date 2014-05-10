var Scrambo = require('../lib/scrambo.js');
var assert = require('assert');

describe('Scrambo', function(){
  var test;
  
  beforeEach(function(){
    test = new Scrambo();
  });
  
  describe('constructor', function(){
    it('default type should be 333', function(){
      assert.equal(test.type(), '333');
    });
  });
  
  describe('type', function(){
    it('should be set to 333', function(){
      test.type('333');
      assert.equal(test.type(), '333');
    });
    it('should be set to 444', function(){
      test.type('444');
      assert.equal(test.type(), '444');
    });
    it('should be set to 555', function(){
      test.type('555');
      assert.equal(test.type(), '555');
    });
  });
  
  describe('chaining', function(){
    it('should chain a seed followed by a get', function(){      
      test = new Scrambo().seed(10).get(2);
    });
    it('should chain a type set followed by a get', function(){      
      test = new Scrambo().type('444').get(2);
    });
    it('should chain a seed followed by a type set followed by a get', function(){      
          test = new Scrambo().seed(1).type('444').get();
    });
    it('should chain a type set followed by a seed set followed by a get', function(){      
          test = new Scrambo().type('444').seed(1).get(1);
    });
  });  

  describe('seeded scrambles', function(){
    it('should return the same each time', function(){      
      var seeded_scramble = test.seed(1).get();
      for (var i = 1; i <= 100; i++) {
        assert.equal(seeded_scramble, test.seed(1).get());
      }
    });
    it('complex should return the same each time', function(){      
      var seeded_scramble = test.seed(50).type('444').get();
      for (var i = 1; i <= 100; i++) {
        assert.equal(seeded_scramble, test.seed(50).type('444').get());
      }
    });
  });
  
  describe('minx', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('minx');
      test.get();    
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('minx');
      test.get();    
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('minx').get();
    });
  });
  
  describe('pyram', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('pyram');
      test.get();    
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('pyram');
      test.get();    
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('pyram').get();
    });
  });
  
  describe('clock', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('clock');
      test.get();    
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('clock');
      test.get();    
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('clock').get();
    });
  });
  
  describe('sq1', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('sq1');
      test.get();    
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('sq1');
      test.get();    
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('sq1').get();
    });
  });
  
  describe('scramble length', function(){
    it('should equal 20', function(){      
      test = test.get();
      assert.equal(test.split(' ').length, 20);
    });
    it('should equal 5', function(){
      test = test.length(5).get();
      assert.equal(test.split(' ').length, 5);
    });
    it('should equal 1', function(){
      test = test.length(1).get();
      assert.equal(test.split(' ').length, 1);
    });
    it('should equal 10', function(){
      test = test.length(10).get();
      assert.equal(test.split(' ').length, 10);
    });
  });
  
  describe('555', function(){
    it('scramble should equal 20', function(){
      test = test.type('555').get();
      assert.equal(test.split(' ').length, 20);
    });
    it('scramble should equal 5', function(){
      test = test.length(5).type('555').get();
      assert.equal(test.split(' ').length, 5);
    });
    it('scramble should equal 1', function(){
      test = test.length(1).type('555').get();
      assert.equal(test.split(' ').length, 1);
    });
    it('scramble should equal 10', function(){
      test = test.length(10).type('555').get();
      assert.equal(test.split(' ').length, 10);
    });
  });

});