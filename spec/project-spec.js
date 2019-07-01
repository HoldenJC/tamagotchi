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

  it('should decrease all stat values by 1 after 1000 milliseconds', function(){

    jasmine.clock().tick(1000);
    expect(testPet.food).toEqual(29);
    expect(testPet.play).toEqual(29);
    expect(testPet.energy).toEqual(29);
    expect(testPet.potty).toEqual(29);
    expect(testPet.love).toEqual(29);
    console.log(testPet);
  });

  it('should increase actioned stat by 5', function(){
    jasmine.clock().tick(10000);
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

  it('should restrict stat values to be between 0 and 30', function(){
    jasmine.clock().tick(1000);
    testPet.feed();
    testPet.playWith();
    testPet.rest();
    testPet.bathroom();
    testPet.lovePet();
    expect(testPet.food).toEqual(30);
    expect(testPet.play).toEqual(30);
    expect(testPet.energy).toEqual(30);
    expect(testPet.potty).toEqual(30);
    expect(testPet.love).toEqual(30);
    console.log(testPet);

    jasmine.clock().tick(40000);
    expect(testPet.food).toEqual(0);
    expect(testPet.play).toEqual(0);
    expect(testPet.love).toEqual(0);
    console.log(testPet);
  });

  it('should change Tamagotchi sick property if total stat count dips below 100', function(){
    jasmine.clock().tick(12000);
    expect(testPet.sick).toEqual(true);
    console.log(testPet);
  });

  it('should re-check Tamagotchi status after every action', function() {
    jasmine.clock().tick(12000);
    testPet.feed();
    testPet.playWith();
    testPet.rest(); 
    testPet.bathroom();
    testPet.lovePet();
    expect(testPet.sick).toEqual(false);
    console.log(testPet.sick);
  });

  it('should decrease all stat values by 2 after every 1000 milliseconds if Tamagotchi sick = true', function(){
    jasmine.clock().tick(12000);
    expect(testPet.food).toEqual(17);
    expect(testPet.play).toEqual(17);
    expect(testPet.energy).toEqual(17);
    expect(testPet.potty).toEqual(17);
    expect(testPet.love).toEqual(17);
    console.log(testPet);
  });

  it('should change Tamagotchi Pooped status to true if Potty level reaches 0', function(){
    jasmine.clock().tick(21000);
    expect(testPet.pooped).toEqual(true);
    expect(testPet.potty).toEqual(30);
    expect(testPet.poopedCounter).toEqual(1);
    console.log(testPet);

    jasmine.clock().tick(3000);
    expect(testPet.pooped).toEqual(false);
    expect(testPet.potty).toEqual(24);
    expect(testPet.poopedCounter).toEqual(0);
    console.log(testPet);
  });
  
  it('should increase the poopedCounter by 0.5 every time cleanUp function is called', function(){
    jasmine.clock().tick(21000);
    testPet.cleanUp();
    expect(testPet.poopedCounter).toEqual(1.5);
    console.log(testPet); 
  });

  it('should change Tamagotchi unhappy status to true if Play level reaches 0', function(){
    jasmine.clock().tick(21000); 
    expect(testPet.unhappy).toEqual(true);
    console.log(testPet);
  });

  it('should change Tamagotchi unconscious status to true if Energy level reaches 0', function(){
    jasmine.clock().tick(21000);   
    expect(testPet.unconscious).toEqual(true);
    console.log(testPet);

    jasmine.clock().tick(5000);
    expect(testPet.unconscious).toEqual(false);
    expect(testPet.energy).toEqual(25);
    console.log(testPet);
  });
})
