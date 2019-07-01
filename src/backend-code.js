export class Pet {
  constructor(){
    this.food = 30;
    this.play = 30;
    this.energy = 30;
    this.potty = 30;
    this.love = 30;
    this.sick = false;
    this.pooped = false;
    this.unhappy = false;
    this.dead = false;
    this.flee = false;
  }

  reduceStats(){
    setInterval(() => {
      if(this.sick === true){
        this.food -= 2;
        this.play -= 2;
        this.energy -= 2;
        this.potty -= 2;
        this.love -= 2;
      } else {
        this.food--;
        this.play--;
        this.energy--;
        this.potty--;
        this.love--;
      }
      this.checkSick();
    }, 10000);
  }

  feed(){
    if(this.food <= 25){
      this.food += 5;
    } else {
      this.food = 30;
    }
  }
  playWith(){
    if(this.play <= 25){
      this.play += 5;
    } else {
      this.play = 30;
    }
  }
  rest(){
    if(this.energy <= 25){
      this.energy += 5;
    } else {
      this.energy = 30;
    }
  }
  bathroom(){
    if(this.potty <= 25){
      this.potty += 5;
    } else {
      this.potty = 30;
    }
  }
  lovePet(){
    if(this.love <= 25){
      this.love += 5;
    } else {
      this.love = 30;
    }
  }

  checkSick(){
    if((this.food + this.play + this.energy + this.potty + this.love) < 100){
      this.sick = true;
    } else {
      this.sick = false;
    }
  }

}
