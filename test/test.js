/* jshint node: true, mocha:true */

var Scrambo = require('../lib/scrambo.js');
var assert = require('assert');

function arrays_equal(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  return true;
}

describe('Scrambo', function(){
  var test;

  beforeEach(function(){
    test = new Scrambo();
  });

  describe('constructor', function(){
    it('default type should be 333', function(){
      assert.equal(test.type(), '333');
    });
    it('should display an error for an unsupported type', function(){
      var error = /invalid scrambler, allowed: /;
      assert.throws(function(){
        test.type('notarealtype');
      }, error);
    });
  });

  describe('default', function(){
    it('seed should return Math', function(){
      assert.equal(test.seed(), Math);
    });
    it('length should return 20', function(){
      assert.equal(test.length(), 20);
    });
  });

  describe('same scrambles', function(){
    it('should match 2x2', function(){
      var scrambles = [
        "F  R  F  R  U2 F' U  F2 R2 ",
        "F2 R' U' F  R2 U2 F  U  F2 ",
        "F' R' U  F  U  R' U' ",
        "R2 F  U2 F  R2 F2 U2 F' R' ",
        "U  R2 U' F  U' F  U2 R2 ",
        "U' F  U2 R2 F' U' F  R  ",
        "F  R' U' F  U' R  F  R2 ",
        "F' U2 R  U' R2 F' R  F  U2 ",
        "F2 U' F  U2 R' U' F' R' ",
        "R' U2 R2 U' R2 F  R  U' "
      ];
      var generated = test.seed(1).type('222').get(10);
      assert(arrays_equal(scrambles, generated.map(s => s['scramble_string'])));
    });
    it('should match 3x3', function(){
      var scrambles = [
        "D' B  R  D' F  U2 L' B' L' B2 R' D2 F2 R  D2 L' B2 D2 F2 ",
        "D' F2 L  D  L2 F' D' R2 B' D2 R' B2 D2 L2 B2 R  U2 R2 U2 ",
        "B  L' U  R2 F  D  F  R  F2 D' F  U2 F2 U2 F  D2 B' L2 D2 F  L2 ",
        "B2 D' U  B2 F2 D  B2 D  B2 L2 B2 L  B  L2 U' F' D  L  R2 U' B  ",
        "F2 D2 F  U' L' F' B' L' B' D2 L2 B2 U2 D2 L' B2 L' F2 D2 B2 ",
        "D2 L2 B' F  L2 D2 U2 B' F2 D2 U' B2 L2 B2 F  R  D' R2 B  ",
        "B  D2 R  U' D' F' B2 U' F' U2 R2 U2 R  F2 B2 R  U2 B2 U2 L2 ",
        "D' R  U2 L  F' U  B  R2 L' B' R2 D2 R2 F  R2 B  U2 L2 F2 R2 ",
        "L2 U' F2 L2 U' L2 R2 D2 L2 D' R  D2 F  L  B' U  F' U2 B' D2 L' ",
        "D2 B2 L' U2 R2 D2 B2 U2 R  B2 R  B' F' D' B' L  F' R2 F' U  "
      ];
      var generated = test.seed(1).type('333').get(10);
      assert(arrays_equal(scrambles, generated.map(s => s['scramble_string'])));
    });
    it('should match 4x4', function(){
      var scrambles = [
        "L D Rw2 B2 Fw D2 Fw' F' D' Uw' B Uw Fw' F Rw D' L F2 Rw2 R' D' Rw' R' D' Uw F L' Fw F2 Uw L Rw' R2 F' L U2 B' Fw' Uw R2",
        "Rw B2 L' B' U' B2 L2 D Uw Fw' Rw' Fw2 U Fw2 Rw' R' Uw' F2 U2 R Uw2 B U' Fw2 Uw' Rw2 Uw' B D' Fw2 Rw Fw Uw U L2 Rw' U2 L B F'",
        "Fw2 D2 Uw' R2 Fw' U B2 D2 L2 Rw2 R' B D F2 Uw L' F2 L R2 D2 B Fw' Rw B2 Fw2 R' D' Uw' L2 Uw Fw' R2 U2 Rw R D' Uw U' B D",
        "Uw2 Fw2 L' F R2 Uw U R' U' Fw D' B' Rw' U2 L2 B Fw2 L' Uw' B2 R2 Uw F' Uw2 B Fw' Rw2 R D' Uw' Rw' D2 B2 U2 L2 R2 F2 R2 B Fw",
        "Fw2 Rw D' B2 R' D L' D Rw2 R2 Uw U2 Rw2 R D Rw2 B F2 Uw' L Rw' R' B' U2 L' F' R' Fw L' D' B' Rw' B' L' Rw' R2 Fw2 Rw' Uw2 U'",
        "B' Fw2 Rw' Fw2 U' B L D' Uw2 Rw2 D2 Fw2 F' D' B' L2 F2 Rw R2 D Uw Fw2 D2 U' Fw' U2 B2 F Uw Rw' B Uw2 Rw' Uw2 F Uw B D L' F'",
        "Rw' R2 B2 F2 D L' B' L2 U' L Fw U2 Fw2 L2 Rw R2 B' L D B' D' Rw' Uw R F Rw' Fw F' D B2 Rw2 D2 U2 R' Fw' D2 F2 L' Uw Fw",
        "Uw2 L U' R Fw' F' R2 Fw Uw' U2 F2 Uw' B' L Rw' Fw Rw2 R' F R B L' R2 B R Fw L2 D2 L U' Fw2 R2 D' L2 F L' R2 U B' F'",
        "R2 D2 U2 R' B2 Fw' F2 D' R2 B2 L Fw F' L2 Rw' B F2 R' B Fw2 U' Rw2 Uw2 L R' U' B' Uw U Fw F' U2 Rw B2 Fw' Rw D' L Rw2 Uw",
        "Uw' Fw2 D' R2 Uw B' F D B2 D Uw' F U B' U R' B2 Uw F' U F L' D U2 Rw F2 Rw2 Fw2 R B2 L2 B Rw' R' F2 Rw B' Uw' B2 Fw",
      ];
      var generated = test.seed(1).type('444').get(10);
      assert(arrays_equal(scrambles, generated.map(s => s['scramble_string'])));
    });
    it('should match 5x5', function(){
      var scrambles = [
        "Lw Dw Lw2 B2 Bw' Dw2 Fw' D' Uw' B Dw' Uw Bw Fw Rw D' Lw F2 Rw2 R' D' Rw' R' D' Dw Uw F L' Bw' F2 Uw L Rw2 F' L U2 Bw' Dw' Rw R2 B2 L' B' U' B2 L2 D Uw Fw' Rw' Bw2 U Bw2 Lw Rw' R' Dw Fw2 U2 R",
        "R2 Uw2 B U' Bw2 Uw' Rw2 Uw' B D' Bw2 Rw Bw Fw Uw U L2 Rw' U2 L B Bw2 Fw' D2 Dw R2 Bw U B Bw2 D2 L2 Rw2 B D F2 Dw' L' Lw F2 L R2 D2 B Bw Rw B2 Bw2 R' D' Uw' Lw2 Uw Bw R2 U2 Lw' Rw D' Uw'",
        "Dw' B D Dw2 Bw2 L' Fw R2 Dw' Uw R' U' Fw D' B' Rw' U2 L2 Bw Fw2 L' Uw' B2 R2 Dw' F' Uw2 B Bw Rw R' D' Uw' Rw' D2 B2 Uw2 L2 Rw2 Fw2 R2 B Bw2 Fw Rw D' B2 R' D L' D Rw2 R2 Dw' Uw2 Lw2 Rw D Lw2 F2",
        "B Uw' L Lw R' B' Bw2 U2 L' Fw' R' Bw' L' D' B' Bw' Rw' B' Bw L' Rw2 Bw Fw2 Rw' Dw2 U' B' Fw2 Lw Fw2 U' B L D' Uw2 Lw2 D2 Fw' D' Bw' L2 F2 Rw Dw Uw Bw2 D2 Uw' Bw U2 Bw2 F Uw Lw B Uw2 Lw Rw' Dw2 Fw",
        "Dw' B D Lw' F' Lw Rw' R2 B2 F2 D L' B' Lw2 Uw' L Fw Uw2 Fw2 L2 Rw R2 B' Lw D B' Dw' Rw' Uw R F Rw' Fw F' D B2 Lw2 Dw2 Uw2 R' Bw Dw2 F2 L' Uw Bw' Dw2 L Lw2 U' Rw Fw' F' R2 Fw Dw U2 F2 Uw' B'",
        "L Rw' Bw' Rw2 R' F R B L' Rw2 R2 B R Bw' Fw L2 D2 L U' Fw2 Rw2 Dw' L2 F Lw' Rw2 U B' F' R2 D2 U2 Rw' B2 Bw2 Fw' F2 Dw' R2 Bw2 L Fw L2 Rw' B F2 R' B Bw2 Uw' Lw2 Uw2 L Rw' U' Bw' Uw U Fw U2",
        "Lw Rw B2 Fw' Lw' Rw D' L Lw2 Dw Uw Fw2 D' Rw2 R Dw' B' F D B2 D Dw F U Bw' U R' B2 Uw F' U Fw L' D U2 Rw Fw2 Rw2 Fw2 R B2 L2 B Lw Rw' Fw2 Lw' B' Uw' B2 Fw D2 B F' Uw' Rw D Dw2 U2 F",
        "Bw Fw2 F R Fw' Dw2 Uw U' Bw2 F2 D Dw2 Fw' F2 D Rw' D Dw' F D' Dw' L Rw2 R' Bw2 Lw Rw2 R2 Fw2 R2 D Uw' B2 Dw' Uw2 L2 Rw' R' Fw Rw' Uw2 B Fw F2 Uw U2 Bw' L F2 Rw' Bw' D L' Fw' D' Dw2 Uw2 U2 B2 L'",
        "Bw Rw2 Bw2 D Dw2 U2 F L Uw2 L D' U2 L2 Uw' Rw R F' D F' Rw' Fw' R' B Dw2 L' Lw Dw L2 Lw Uw' Lw2 D Dw' L2 Bw' Fw2 D2 L' Uw U' Bw Fw2 Lw Fw L2 Bw' R Bw D L' Rw2 R2 U' Fw F L' Fw' D2 Uw U'",
        "Fw2 F' L' Lw B' Dw' Fw2 Uw' B Dw2 Lw Rw2 D2 Dw Rw' B2 Bw Dw B Rw Dw Uw2 B2 Uw2 L R' Fw' R' U Fw' U B' Bw D' L2 F U2 L2 Bw' Dw' L2 Dw2 Fw U Bw' F' Dw' Lw Uw' L' Lw2 Dw B2 Dw' L' Fw2 U2 F L R2",
      ];
      var generated = test.seed(1).type('555').get(10);
      assert(arrays_equal(scrambles, generated.map(s => s['scramble_string'])));
    });
    it('should match minx', function(){
      var scrambles = [
        "R-- D-- R-- D-- R-- D-- R-- D-- R++ D++ U\nR-- D++ R++ D-- R++ D-- R-- D-- R++ D++ U\nR-- D++ R++ D-- R-- D++ R-- D-- R-- D++ U\nR++ D-- R-- D-- R++ D++ R-- D-- R++ D++ U\nR++ D++ R++ D-- R-- D-- R++ D++ R-- D-- U'\nR++ D-- R-- D-- R++ D++ R++ D++ R++ D-- U'\nR-- D++ R-- D-- R-- D++ R-- D++ R-- D-- U'",
        "R++ D-- R-- D-- R++ D-- R++ D++ R-- D-- U'\nR-- D++ R++ D++ R++ D-- R++ D++ R++ D-- U'\nR++ D-- R++ D-- R++ D++ R-- D++ R-- D++ U\nR++ D-- R-- D-- R-- D++ R++ D-- R++ D-- U'\nR-- D-- R++ D-- R++ D-- R++ D++ R-- D-- U'\nR-- D-- R++ D++ R++ D-- R++ D++ R++ D++ U\nR-- D-- R-- D-- R++ D++ R-- D++ R-- D++ U",
        "R-- D++ R-- D++ R-- D-- R++ D-- R-- D-- U'\nR-- D-- R-- D-- R-- D-- R-- D++ R++ D++ U\nR++ D-- R++ D++ R-- D++ R-- D++ R-- D++ U\nR++ D++ R-- D++ R++ D++ R-- D++ R++ D-- U'\nR++ D-- R-- D-- R-- D-- R++ D++ R-- D-- U'\nR++ D-- R++ D++ R++ D++ R++ D++ R-- D++ U\nR-- D++ R-- D-- R-- D++ R-- D++ R-- D-- U'",
        "R++ D-- R-- D-- R++ D-- R-- D++ R++ D++ U\nR++ D++ R-- D++ R-- D++ R-- D-- R-- D-- U'\nR++ D++ R-- D++ R++ D++ R++ D++ R++ D++ U\nR++ D-- R-- D-- R++ D++ R-- D++ R++ D-- U'\nR-- D-- R-- D++ R-- D-- R++ D-- R++ D-- U'\nR-- D++ R++ D-- R++ D-- R-- D++ R-- D-- U'\nR-- D-- R-- D-- R-- D-- R++ D++ R-- D++ U",
        "R-- D-- R-- D++ R++ D++ R-- D-- R++ D-- U'\nR-- D-- R-- D-- R-- D-- R-- D-- R++ D++ U\nR++ D++ R-- D-- R-- D++ R++ D-- R-- D-- U'\nR-- D-- R++ D++ R-- D-- R-- D++ R-- D-- U'\nR++ D-- R-- D-- R++ D++ R-- D++ R++ D-- U'\nR++ D-- R-- D-- R-- D++ R-- D-- R-- D++ U\nR-- D-- R++ D-- R-- D++ R-- D++ R-- D++ U",
        "R++ D++ R-- D++ R++ D-- R-- D-- R++ D-- U'\nR-- D++ R-- D-- R-- D++ R-- D-- R++ D-- U'\nR++ D++ R++ D-- R-- D++ R++ D++ R-- D++ U\nR-- D++ R++ D++ R-- D-- R++ D++ R-- D-- U'\nR-- D-- R++ D-- R++ D-- R-- D-- R++ D++ U\nR-- D-- R-- D-- R-- D-- R-- D-- R++ D-- U'\nR++ D-- R-- D++ R++ D++ R++ D++ R++ D++ U",
        "R-- D++ R++ D-- R-- D++ R++ D++ R-- D-- U'\nR++ D-- R++ D++ R++ D-- R-- D++ R++ D-- U'\nR++ D++ R++ D-- R-- D++ R++ D++ R-- D-- U'\nR++ D-- R-- D++ R++ D++ R++ D-- R++ D-- U'\nR++ D-- R++ D-- R++ D++ R-- D-- R-- D++ U\nR-- D-- R-- D++ R++ D++ R-- D-- R++ D-- U'\nR++ D-- R-- D++ R-- D-- R++ D-- R++ D++ U",
        "R-- D-- R-- D++ R++ D++ R++ D-- R++ D++ U\nR++ D-- R++ D-- R-- D-- R++ D++ R++ D-- U'\nR-- D-- R-- D++ R-- D-- R-- D++ R-- D-- U'\nR++ D-- R++ D-- R-- D++ R++ D-- R++ D++ U\nR-- D++ R-- D-- R++ D++ R++ D++ R-- D-- U'\nR++ D-- R++ D++ R++ D++ R-- D++ R-- D-- U'\nR-- D++ R-- D-- R++ D++ R-- D++ R++ D++ U",
        "R-- D-- R-- D-- R-- D-- R++ D-- R-- D-- U'\nR++ D++ R++ D++ R++ D-- R-- D++ R++ D-- U'\nR-- D++ R++ D++ R++ D-- R-- D++ R-- D-- U'\nR-- D-- R-- D++ R++ D++ R-- D++ R-- D-- U'\nR-- D++ R-- D-- R++ D-- R++ D-- R-- D++ U\nR-- D-- R++ D-- R++ D++ R-- D++ R-- D++ U\nR++ D-- R-- D++ R++ D++ R-- D++ R++ D-- U'",
        "R++ D-- R++ D-- R-- D++ R-- D-- R++ D++ U\nR-- D++ R++ D-- R++ D-- R++ D-- R++ D-- U'\nR++ D++ R-- D-- R++ D++ R-- D++ R-- D++ U\nR++ D++ R-- D++ R++ D++ R++ D-- R-- D-- U'\nR++ D-- R-- D++ R-- D-- R-- D-- R++ D++ U\nR-- D++ R-- D++ R-- D-- R-- D++ R++ D-- U'\nR-- D++ R-- D++ R-- D-- R++ D-- R-- D-- U'",
      ];
      var generated = test.seed(1).type('minx').get(10);
      assert(arrays_equal(scrambles, generated.map(s => s['scramble_string'])));
    });
    it('should match pyram', function(){
      var scrambles = [
        "L R' L' U R' B L' l r' b u ",
        "L U' B R U R' L' r b u ",
        "R L R B' U L' U r b ",
        "U' L' U B' R' B U' l b' u' ",
        "L U' R B L' B' U' R u' ",
        "R L' R U B U L' l' r' b' u ",
        "L' R U L' U' R B l u' ",
        "B' U' B' R' U' B R L l' r ",
        "R' U' L' R L' U L l r b u ",
        "B' R' U B' R U' L' U' l' r' b ",
        "L U' L U B R B' R l r' b ",
        "U R' U' B' R U L' l' b u ",
        "U B L' R' B' R' U' R' l' b' u' ",
        "U' B U L R' U' B U' l' r' ",
        "U B' R' U' L B U' l' r' b' u ",
        "L' U' L' R U' L' B R' l' r' b u' ",
        "U L U B' R' U L' R' B' r b' ",
        "U L' R' U' R B U' R' l r' b u' ",
        "R' U' B' U' R' U L' U l b' u ",
        "U' L B' U L' B R B' R' l r b' ",
      ];
      var generated = test.seed(1).type('pyram').get(20);
      assert(arrays_equal(scrambles, generated.map(s => s['scramble_string'])));
    });
    it('should match sq1', function(){
      var scrambles = [
        "(0, -1) / (3, 3) / (3, 0) / (1, -5) / (-1, -1) / (0, -3) / (0, -5) / (3, 0) / (1, -4) / (4, 0) / (-3, 0) / (2, 0) / (-3, 0)",
        "(0, -1) / (0, 3) / (3, 0) / (-5, -5) / (0, -3) / (3, 0) / (0, -1) / (-3, 0) / (-1, -3) / (0, -2) / (2, -3) / (-2, -1) / (2, 0) / ",
        "(0, -1) / (-2, 4) / (-3, 0) / (2, -1) / (6, -3) / (1, 0) / (0, -3) / (-1, 0) / (0, -4) / (-5, 0) / (1, 0) / (-1, -4) / (0, -2)",
        "(-5, 0) / (5, 2) / (-3, -3) / (4, -5) / (2, -4) / (1, 0) / (-3, 0) / (-1, 0) / (-2, 0) / (0, -2) / (2, -5) / (-5, 0) / (6, 0)",
        "(0, 2) / (-5, -5) / (5, -1) / (0, -3) / (-5, -3) / (-3, 0) / (-1, 0) / (0, -2) / (2, -3) / (2, -1) / (-2, -2) / (0, -3) / ",
        "(-5, -3) / (0, -3) / (3, 0) / (-4, -1) / (3, 0) / (6, -3) / (1, 0) / (-3, -3) / (-5, 0) / (-2, 0) / (2, -4) / (2, -2) / ",
        "(-5, 3) / (5, -1) / (-3, 0) / (6, -3) / (1, 0) / (0, -3) / (0, -3) / (-3, 0) / (-1, 0) / (2, 0) / (4, 0) / (2, 0) / (-2, 0)",
        "(0, -1) / (0, -3) / (-3, 0) / (3, 0) / (-2, -5) / (-3, -1) / (3, 0) / (6, -5) / (5, 0) / (4, -2) / (-1, 0) / (6, -4)",
        "(-5, 0) / (5, -4) / (4, -2) / (3, 0) / (-3, 0) / (-1, -4) / (0, -2) / (3, 0) / (-3, -4) / (-5, 0) / (-3, -4)",
        "(-2, 0) / (0, 3) / (-1, -1) / (0, -3) / (1, -5) / (6, -3) / (0, -4) / (0, -3) / (3, 0) / (0, -4) / (0, -2) / (0, -4) / "
      ];
      var generated = test.seed(1).type('sq1').get(10);
      assert(arrays_equal(scrambles, generated.map(s => s['scramble_string'])));
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
      var seeded_scramble = test.seed(1).get().map(t => t['scramble_string']);
      for (var i = 1; i <= 100; i++) {
        assert(arrays_equal(seeded_scramble, test.seed(1).get().map(t => t['scramble_string'])));
      }
    });
    it('complex should return the same each time', function(){
      var seeded_scramble = test.seed(50).type('444').get().map(t => t['scramble_string']);
      for (var i = 1; i <= 100; i++) {
        assert(arrays_equal(seeded_scramble, test.seed(50).type('444').get().map(t => t['scramble_string'])));
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

  describe('555', function(){
    it('scramble should equal 60', function(){
      test = test.type('555').get().map(t => t['scramble_string']);
      assert.equal(test.join().split(' ').length, 60);
    });
    it('scramble should equal 5', function(){
      test = test.type('555').length(5).get().map(t => t['scramble_string']);
      assert.equal(test.join().split(' ').length, 5);
    });
    it('scramble should equal 1', function(){
      test = test.type('555').length(1).get().map(t => t['scramble_string']);
      assert.equal(test.join().split(' ').length, 1);
    });
    it('scramble should equal 10', function(){
      test = test.type('555').length(10).get().map(t => t['scramble_string']);
      assert.equal(test.join().split(' ').length, 10);
    });
  });

});
