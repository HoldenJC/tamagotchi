import { Pet } from './../src/backend-code.js';

describe('Pet', function() {

  let testPet;

  beforeEach(function() {
    jasmine.clock().install();
    testPet = new Pet();
    testPet.reduceStats();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });


  it('should make a new Tamagotchi with max stats', function() {
    expect(testPet.food).toEqual(30);
    expect(testPet.play).toEqual(30);
    expect(testPet.energy).toEqual(30);
    expect(testPet.potty).toEqual(30);
    expect(testPet.love).toEqual(30);
    console.log(testPet);
  });

  it('should decrease all stat values by 1 after 10000 milliseconds', function(){

    jasmine.clock().tick(10000);
    expect(testPet.food).toEqual(29);
    expect(testPet.play).toEqual(29);
    expect(testPet.energy).toEqual(29);
    expect(testPet.potty).toEqual(29);
    expect(testPet.love).toEqual(29);
    console.log(testPet);
  });

  it('should increase actioned stat by 5', function(){
    jasmine.clock().tick(100000);
    testPet.feed();
    testPet.playWith();
    testPet.rest();
    testPet.bathroom();
    testPet.lovePet();
    expect(testPet.food).toEqual(25);
    expect(testPet.play).toEqual(25);
    expect(testPet.energy).toEqual(25);
    expect(testPet.potty).toEqual(25);
    expect(testPet.love).toEqual(25);
    console.log(testPet);
  });


})
