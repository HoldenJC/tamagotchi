export class Pet {
  constructor(){
    this.food = 30;
    this.play = 30;
    this.energy = 30;
    this.potty = 30;
    this.love = 30;
  }

  reduceStats(){
    setInterval(() => {
      this.food--;
      this.play--;
      this.energy--;
      this.potty--;
      this.love--;
    }, 10000);
  }

  feed(){
    this.food += 5;
  }
  playWith(){
    this.play += 5;
  }
  rest(){
    this.energy += 5;
  }
  bathroom(){
    this.potty += 5;
  }
  lovePet(){
    this.love += 5;
  }

}
